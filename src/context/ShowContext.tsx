"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import ShowTypes from "../types/show";

interface ShowContextType {
  selectedShow: ShowTypes | null;
  setSelectedShow: (show: ShowTypes | null) => void;
}

// contexto para compartir el show seleccionado entre componentes //
const ShowContext = createContext<ShowContextType | undefined>(undefined);

// proveedor del contexto para que todo lo envuelto en el proveedor pueda acceder al contexto //
export function ShowProvider({ children }: { children: ReactNode }) {
  const [selectedShow, setSelectedShow] = useState<ShowTypes | null>(null);

  return (
    // proveedor del contexto a los hijos //
    <ShowContext.Provider value={{ selectedShow, setSelectedShow }}>
      {children}
    </ShowContext.Provider>
  );
}

// funcion de atajo para poder acceder al contexto desde cualquier componente //
export function useShow() {
  const context = useContext(ShowContext);
  if (context === undefined) {
    throw new Error("UseShow debe usarse dentro de un ShowProvider");
  }
  return context;
}
