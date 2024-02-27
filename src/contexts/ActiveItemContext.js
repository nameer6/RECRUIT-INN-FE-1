import { createContext, useContext, useState } from 'react';

const ActiveItemContext = createContext();

export const useActiveItem = () => useContext(ActiveItemContext);

export const ActiveItemProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
};