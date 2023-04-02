import { createContext, MutableRefObject, ReactNode, useRef, useState } from "react";

export default function PortfolioStore({ children }: { children: ReactNode }) {
  
  const containerRef = useRef<HTMLElement | null>(null);
  const [drawLength, setDrawLength] = useState(0)

  const contextValues = {
    containerRef, drawLength, setDrawLength

  }

  return <PortfolioContext.Provider value={contextValues}>{children}</PortfolioContext.Provider>;
}
export const PortfolioContext = createContext<MutableRefObject<HTMLElement | null> | null>(null);

interface ContextProvider {
  selectedTableNumber: string;
  setSelectedTableNumber: React.Dispatch<React.SetStateAction<string>>;

  isShowFloorPlan: boolean;
  setisShowFloorPlan: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isShowCancelModal: boolean;
  setIsShowCancelModal: Dispatch<SetStateAction<boolean>>;
}
