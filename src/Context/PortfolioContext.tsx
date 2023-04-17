import { createContext, MutableRefObject, ReactNode, useRef, useState } from "react";

interface ContextProvider {
  modalRef: MutableRefObject<HTMLDivElement | null>;
  drawLength: number;
  setDrawLength: React.Dispatch<React.SetStateAction<number>>;
}

export default function PortfolioStore({ children }: { children: ReactNode }) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [drawLength, setDrawLength] = useState(0);

  const contextValues = {
    modalRef,
    drawLength,
    setDrawLength,
  };

  return <PortfolioContext.Provider value={contextValues}>{children}</PortfolioContext.Provider>;
}
// export const PortfolioContext = createContext<MutableRefObject<HTMLElement | null> | null>(null);
export const PortfolioContext = createContext({} as ContextProvider);
