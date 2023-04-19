import { MutableRefObject } from "react";

interface Inputs {
  ref: MutableRefObject<HTMLElement | null>;
  viewPortHeight: number;
}

const useCalcElementPositionOnScrollbar = ({ ref, viewPortHeight }: Inputs): number => {
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

  let position = 0;
  console.log((viewPortHeight / document.documentElement.scrollHeight) * 100);

  if (ref.current !== null) {
    const scrolltestTopPercentage = (getElementDistanceFromTop({ element: ref.current }) / document.documentElement.scrollHeight) * 100;

    position = (viewPortHeight / 100) * scrolltestTopPercentage;
  }

  return position;
};

export default useCalcElementPositionOnScrollbar;
