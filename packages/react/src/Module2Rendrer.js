import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import reactStore from 'react-store';
import reactTheme from 'react-theme';
import { ThemeProvider, makeStyles, StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Paper, TextField, Fab } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';

const useState = React.useState;
const useEffect = React.useEffect;
const generateClassName = createGenerateClassName({
    productionPrefix: 'md2',
});

const useStyles = makeStyles({
    editField: {
        marginBottom: '1rem',
        textAlign: 'right',
    },
    editContainer: {
        padding: '1rem',
    },
    editSelect: {
        marginRight: '1rem',
        minWidth: 120,
    }
});

const SimpleEdit = () => {

    const items = useSelector(state => state.items);
    const currentItem = useSelector(state => state.currentItem);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [hasItem, setHasItem] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(2);
    useEffect(() => {
        const itemForEdit = items.find(item => item.id == currentItem);
        if (itemForEdit) {
            setHasItem(true);
            setTitle(itemForEdit.title);
            setDescription(itemForEdit.description);
            setPriority(itemForEdit.priority);
        }
    }, [currentItem, items])

    const handleSave = () => {
        const itemForEdit = items.find(item => item.id == currentItem);
        if (itemForEdit) {
            itemForEdit.title = title;
            itemForEdit.description = description;
            itemForEdit.priority = priority;
            dispatch({ type: 'SET_ITEMS', payload: items })
        }
    }

    return (
        <Paper className={classes.editContainer}>
            <div className={classes.editField}><TextField disabled={!hasItem ? 'disabled' : ''} value={title} onChange={(evt) => setTitle(evt.target.value)} fullWidth label="Title" variant="filled" /></div>
            <div className={classes.editField}><TextField disabled={!hasItem ? 'disabled' : ''} value={description} onChange={(evt) => setDescription(evt.target.value)} multiline fullWidth rows="6" label="Description" variant="filled" /></div>
            <div className={classes.editField}>
                <FormControl disabled={!hasItem ? 'disabled' : ''} variant="filled" className={classes.editSelect}>
                    <InputLabel id="demo-simple-select-filled-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={priority}
                        onChange={(evt) => setPriority(evt.target.value)}
                        native
                    >
                        <option value={1}>highest</option>
                        <option value={2}>high</option>
                        <option value={3}>normal</option>
                        <option value={4}>low</option>
                    </Select>
                </FormControl>
                <Fab disabled={!hasItem ? 'disabled' : ''} onClick={handleSave} size="small" color="secondary"><SaveIcon /></Fab>
            </div>
        </Paper>
    )
}

const App = () => {
    return (
        <Provider store={reactStore}><StylesProvider generateClassName={generateClassName}><ThemeProvider theme={reactTheme}><SimpleEdit></SimpleEdit></ThemeProvider></StylesProvider></Provider>
    )
}

export default (el) => {
    const app = App();
    ReactDOM.render(app, el);
    return app;
};