import { createContext, MutableRefObject, ReactNode, useRef, useState } from "react";

interface ContextProvider {
  modalRef: MutableRefObject<HTMLDivElement | null>;
  project1Ref: MutableRefObject<HTMLDivElement | null>;
  otherProjectsRef: MutableRefObject<HTMLDivElement | null>;
  heroRef: MutableRefObject<HTMLDivElement | null>;

  drawLength: number;
  setDrawLength: React.Dispatch<React.SetStateAction<number>>;
}

export default function PortfolioStore({ children }: { children: ReactNode }) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const otherProjectsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const [drawLength, setDrawLength] = useState(0);

  const contextValues = {
    modalRef,
    heroRef,
    project1Ref,
    drawLength,
    otherProjectsRef,
    setDrawLength,
  };

  return <PortfolioContext.Provider value={contextValues}>{children}</PortfolioContext.Provider>;
}
// export const PortfolioContext = createContext<MutableRefObject<HTMLElement | null> | null>(null);
export const PortfolioContext = createContext({} as ContextProvider);

