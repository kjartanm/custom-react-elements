import React from 'react';
import ReactDOM from 'react-dom';
import { TestContext, TestProvider } from 'context-proxy';
import { Provider, useSelector } from "react-redux"; 
import testStore from 'test-store';
import TestTheme from 'test-theme';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';
const useContext = React.useContext;
const useState = React.useState;

const Module1 = ({children}) => {
    const { testProp, setTestProp } = useContext(TestContext);
    const [playerName, setCtxPlayerName] = useState('static player');
    const addressee = useSelector(state => state)
    function handleClick(e) {
        e.preventDefault();
        setCtxPlayerName("Carl Barx");
        setTestProp("jubajuba")
      }
    return (<><h2 style={{ color: 'black' }}>Hello from Module#1, #{testProp}#, #{playerName}#, #{addressee}# !</h2>
    <button onClick={handleClick}>Click</button>
    <Checkbox />
    {children}
    </>);
}

const App = ({ children }) => {
    return (
        <Provider store={testStore}><ThemeProvider theme={TestTheme}><TestProvider><Module1>{children}</Module1></TestProvider></ThemeProvider></Provider>
    )
}

export default (el) => {
    ReactDOM.render(App({ children: el.children }), el);
    return null;
};