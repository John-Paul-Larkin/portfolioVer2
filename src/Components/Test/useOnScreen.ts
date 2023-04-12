import { RefObject, useEffect, useRef, useState } from "react";

interface Props {
  ref: RefObject<HTMLElement>;
  projectRef: HTMLElement | null;
}

export default function useOnScreen({ ref, projectRef }: Props) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  console.log("here");

  useEffect(() => {
    // const rootTEst = document.getElementById("projects");

    if (projectRef !== null) {
      console.log("pr", projectRef);

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsOnScreen(entry.isIntersecting);
          console.log(projectRef);
        },
        { root: null, rootMargin: "100px", threshold: 1 }
      );
    }
  }, [projectRef]);

  useEffect(() => {
    observerRef.current?.observe(ref.current!);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
