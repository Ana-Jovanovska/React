import React, { createContext, useContext, useState, ReactNode } from "react";

type DestinationContextType = {
  destination: string | null;
  setDestination: (destination: string) => void;
};

const DestinationContext = createContext<DestinationContextType | undefined>(
  undefined
);

export const useDestination = () => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error("useDestination must be used within a DestinationProvider");
  }
  return context;
};

export const DestinationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [destination, setDestination] = useState<string | null>(null);

  return (
    <DestinationContext.Provider value={{ destination, setDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};
