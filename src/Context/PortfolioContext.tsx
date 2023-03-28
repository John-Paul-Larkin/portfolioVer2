import { createContext, MutableRefObject, ReactNode, useRef } from "react";

export default function PortfolioStore({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement | null>(null);

  return <PortfolioContext.Provider value={containerRef}>{children}</PortfolioContext.Provider>;
}
export const PortfolioContext = createContext<MutableRefObject<HTMLElement | null> | null>(null);
