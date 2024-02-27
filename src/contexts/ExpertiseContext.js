import { createContext, useContext, useState } from 'react';

const ExpertiseItemContext = createContext();

export const useExpertiseContext = () => useContext(ExpertiseItemContext);

export const ExpertiseItemProvider = ({ children }) => {
    const [expertiseItem, setExpertiseItem] = useState(null);

    return (
        <ExpertiseItemContext.Provider value={{ expertiseItem, setExpertiseItem }}>
            {children}
        </ExpertiseItemContext.Provider>
    );
};