// src/context/GlobalStateContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for the context state
interface GlobalStateContextType {
  clickCount: number;
  setClickCount: React.Dispatch<React.SetStateAction<number>>;
  isRainbow: boolean;
  setIsRainbow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define the type for the children prop
interface GlobalStateProviderProps {
  children: ReactNode;
}

// Create the context
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Provider component
export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);
  const [isRainbow, setIsRainbow] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ clickCount, setClickCount, isRainbow, setIsRainbow }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
