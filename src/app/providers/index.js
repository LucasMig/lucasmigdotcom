'use client';
import { NextUIProvider } from '@nextui-org/react';
import { createContext, useContext, useState } from 'react';

const MainContext = createContext({
  isSideBarOpen: false,
  toggleSideBar: () => {},
});

export default function Providers({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <NextUIProvider>
      <MainContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
        {children}
      </MainContext.Provider>
    </NextUIProvider>
  );
}

export const useMainContext = () => useContext(MainContext);
