import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux"; 
import testStore from 'test-store';
import TestTheme from 'test-theme';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';

const Module2 = ({children}) => {
    const addressee = useSelector(state => state);
    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault();
        dispatch({type:'SET_ADDRESSEE', payload:"Donald Duck"});
      }

    return (<>
        <h2 style={{ color: 'red' }}>Hello from Module#2, #{addressee}#  !</h2>
        <button onClick={handleClick}>Click</button>
        <Checkbox defaultChecked />
        {children}
    </>);
}

const App = ({ children }) => {
    return (
        <Provider store={testStore}><ThemeProvider theme={TestTheme}><Module2>{children}</Module2></ThemeProvider></Provider>
    )
}

export default (el) => {
    const app = App({ children: el.children });
    ReactDOM.render(app, el);
    return app;
};