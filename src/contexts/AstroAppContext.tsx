import React, { useContext, ReactNode, createContext } from 'react';

const AstroAppContext = createContext<any>({});

export function useAstro() {
  return useContext(AstroAppContext);
}

interface AstroAppProviderProps {
  children: ReactNode
}

export function AstroAppProvider({ children }: AstroAppProviderProps) {



  const value = {
  }

  return (
    <AstroAppContext.Provider value={value}>
      {children}
    </AstroAppContext.Provider>
  )
}