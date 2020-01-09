import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import reactStore from 'react-store';
import reactTheme from 'react-theme';

import { ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const WarningButton = withStyles(theme => ({
    root: {
      color: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main,
      '&:hover': {
        backgroundColor: theme.palette.warning.light,
      },
    },
  }))(Fab);

const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
    activeRow:{
        backgroundColor: 'hsla(0, 96%, 91%, 0.71)',
    },
    passivRow:{
        backgroundColor: 'hsla(0, 96%, 91%, 0)',
    },
});

const SimpleTable = () => {
    const classes = useStyles();
    const items = useSelector(state => state.items);
    const currentItem = useSelector(state => state.currentItem);
    const allDone = items.reduce((acc, item)=> acc && item.done, true);
    const dispatch = useDispatch()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography variant="subtitle1" component="span">Todo</Typography></TableCell>
                        <TableCell align="center"><Checkbox onClick={(event)=>{event.stopPropagation(); dispatch({type:'TOGGLE_ALL_DONE', payload:!allDone})}} checked={allDone}/> <Typography variant="subtitle1" component="span">All done</Typography></TableCell>
                        <TableCell align="center"><Typography variant="subtitle1" component="span">Priority</Typography></TableCell>
                        <TableCell align="center"><Typography variant="subtitle1" component="span">Delete</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <TableRow key={item.id} onClick={()=>dispatch({type:'SET_CURRENT', payload:item.id})} className={item.id == currentItem ? classes.activeRow:''}>
                            <TableCell component="th" scope="row">
                                {item.title}
                            </TableCell>
                            <TableCell align="center"><Checkbox onClick={(event)=>{event.stopPropagation();dispatch({type:'TOGGLE_DONE', payload:item.id})}} checked={item.done} /> Done</TableCell>
                            <TableCell align="center">{item.priority}</TableCell>
                            <TableCell align="center">
                                <WarningButton onClick={()=>dispatch({type:'REMOVE_TODO', payload:item.id})} size="small" aria-label="delete">
                                    <DeleteIcon />
                                </WarningButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const App = ({ children }) => {
    return (
        <Provider store={reactStore}><ThemeProvider theme={reactTheme}><SimpleTable></SimpleTable></ThemeProvider></Provider>
    )
}

export default (el) => {
    ReactDOM.render(App({ children: el.children }), el);
    return null;
};