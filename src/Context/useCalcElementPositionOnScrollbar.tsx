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

  if (ref.current !== null) {
    // element to top / total height of root element --- as a percentage
    // const scrolltestTopPercentage = (getElementDistanceFromTop({ element: ref.current }) / document.documentElement.scrollHeight) * 100;

    const scrolltestTopPercentage =
      ((document.documentElement.scrollHeight - (getElementDistanceFromTop({ element: ref.current }) + viewPortHeight)) /
        document.documentElement.scrollHeight) *
      100;

    //   (document.documentElement.scrollHeight - getElementDistanceFromTop({ element: ref.current }))  / document.documentElement.scrollHeight * 100;
    //     getElementDistanceFromTop({ element: ref.current }) / document.documentElement.scrollHeight
    //   ) *
    //     100;

    // const scrolltestBottomPercentage =
    //   ((getElementDistanceFromTop({ element: ref.current }) + ref.current.offsetHeight) / document.documentElement.scrollHeight) * 100;

    // console.log(getElementDistanceFromTop({ element: ref.current }), "distance from top");
    console.log(scrolltestTopPercentage, "stts");

    // console.log(window.scrollY, "srolly");
    console.log(document.documentElement.offsetHeight, "sh");

    // const scrolltestTopPercentage = getElementDistanceFromTop({ element: ref.current })

    position = (viewPortHeight / 100) * (100 - scrolltestTopPercentage);
    console.log(position, "pos");
    // console.log((viewPortHeight / 100) * scrolltestBottomPercentage);

    // console.log(264 / viewPortHeight *100);
  }
  //   position = 264;
  return position;
};

export default useCalcElementPositionOnScrollbar;
