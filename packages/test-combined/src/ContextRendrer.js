import React from 'react';

const useState = React.useState;

export const TestContext = React.createContext();


export const TestProvider = ({children}) => {
    const [testProp, setTestProp] = useState('Jane Dow!');
    return (
        <TestContext.Provider value={{testProp, setTestProp}}>
            {children}
        </TestContext.Provider>
    );
}

export default {TestContext, TestProvider};
