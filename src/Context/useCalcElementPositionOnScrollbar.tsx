import { MutableRefObject } from "react";

interface Inputs {
  ref: MutableRefObject<HTMLElement | null>;
  viewPortHeight: number;
}

const useCalcElementPositionOnScrollbar = ({ ref, viewPortHeight }: Inputs): { top: number; bottom: number } => {
  const getElementDistanceFromTop = ({ element }: { element: HTMLElement }) => {
    let distance = 0;

    // Loop through the parent elements and add their offsetTop values
    // until the topmost parent (body) is reached

    while (element) {
      distance += element.offsetTop;
      element = element.offsetParent as HTMLElement;
    }

    return distance;
  };

  let top = 0;
  let bottom = 0;

  if (ref.current !== null) {
    // element to top / total height of root element --- as a percentage
    const scrolltestTopPercentage = (getElementDistanceFromTop({ element: ref.current }) / document.documentElement.scrollHeight) * 100;
    const scrolltestBottomPercentage =
      ((getElementDistanceFromTop({ element: ref.current }) + ref.current.offsetHeight) / document.documentElement.scrollHeight) * 100;

    top = (viewPortHeight / 100) * scrolltestTopPercentage;
    bottom = (viewPortHeight / 100) * scrolltestBottomPercentage;
  }
  return { top, bottom };
};

export default useCalcElementPositionOnScrollbar;
