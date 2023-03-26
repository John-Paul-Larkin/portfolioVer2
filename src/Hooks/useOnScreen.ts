import { RefObject, useEffect, useRef, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);



  useEffect(() => {
    const rootTEst = document.getElementById('root')
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
        console.log(entry);
      },
      { root: rootTEst, margin:'500px' }
    );
  }, []);

  useEffect(() => {
    observerRef.current?.observe(ref.current!);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
