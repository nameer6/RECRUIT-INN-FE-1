import React, { createContext, useState, useContext } from 'react';

const TestContext = createContext();

export const useTest = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
  const [test, setTest] = useState(null);

  return (
    <TestContext.Provider value={{ test, setTest }}>
      {children}
    </TestContext.Provider>
  );  
};