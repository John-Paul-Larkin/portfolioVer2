  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
  const heroRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // heroRef.current!.style.height = "60vh";
      // heroRef.current!.style["background position"]
      heroRef.current!.style.backgroundPosition = '0 0 -10vh 0'; 

    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);