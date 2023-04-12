import { useEffect, useRef, useState } from "react";
import "./HeroTest2.css";

export default function HeroScreen() {
  const [loaded, setLoaded] = useState(false);
  // const [pathLength1, setPathLength1] = useState(0);
  // const [pathLength2, setPathLength2] = useState(0);
  // const [pathLength3, setPathLength3] = useState(0);

  // const initialsRef1 = useRef<SVGPathElement>(null);
  // const initialsRef2 = useRef<SVGPathElement>(null);
  // const initialsRef3 = useRef<SVGPathElement>(null);

  // useEffect(() => {
  //   if (initialsRef1.current !== null && initialsRef2.current !== null && initialsRef3.current !== null) {
  //     setPathLength1(initialsRef1.current.getTotalLength());
  //     setPathLength2(initialsRef2.current.getTotalLength());
  //     setPathLength3(initialsRef3.current.getTotalLength());

  //     console.log(pathLength1,'pl1')
  //     console.log(pathLength2,'pl2')
  //     console.log(pathLength3,'pl3')

  //     initialsRef1.current.style.strokeDasharray = pathLength1 + " " + pathLength1;
  //     initialsRef1.current.style.strokeDashoffset = pathLength1.toString();

  //     initialsRef2.current.style.strokeDasharray = pathLength2 + " " + pathLength2;
  //     initialsRef2.current.style.strokeDashoffset = pathLength2.toString();
  //     initialsRef3.current.style.strokeDasharray = pathLength3 + " " + pathLength3;
  //     initialsRef3.current.style.strokeDashoffset = pathLength3.toString();

  //   }

  // }, [pathLength1, pathLength2, pathLength3]);

  // let drawTimer: number;
  // let drawInterval: number;

  // const handleScroll = () => {
  // console.log(drawLength);
  // console.log(pathLength);
  // drawTimer = setTimeout(() => {
  //   let drawLength = 0;
  //   drawInterval = setInterval(() => {
  //     drawLength = drawLength + 5;
  //     if (drawLength >= pathLength) {
  //       clearInterval(drawInterval);
  //     }

  //     if (initialsRef.current !== null) {
  //       initialsRef.current.style.strokeDashoffset = (pathLength - drawLength).toString();
  //     }
  //   }, 5);
  // }, 500);
  //   const drawInterval2 = setInterval(() => {
  //     if (initialsRef.current !== null) {
  //       initialsRef.current.style.fill = "black";
  //     }
  //   }, delay + 200);

  //   if (initialsRef.current !== null) {
  //     console.log("s");
  //     // initialsRef.current.style.strokeDashoffset = '0';
  //   }
  //   setLoaded(true);
  // };

  //   window.addEventListener("load", handleScroll);

  //   return () => {
  //     window.removeEventListener("load", handleScroll);
  //     clearTimeout(drawTimer);
  //     clearInterval(drawInterval);
  //   };
  // }, [pathLength]);

  const width = window.innerWidth;
  const height = window.innerHeight;

  // console.log(height);

  // setTimeout(() => {
  // if (initialsRef1.current !== null && initialsRef2.current !== null && initialsRef3.current !== null) {
  // setLoaded(true);
  // initialsRef1.current.style.strokeDashoffset = "0";
  // initialsRef2.current.style.strokeDashoffset = "0";
  // initialsRef3.current.style.strokeDashoffset = "0";
  // }
  // }, 1500);

  // setTimeout(() => {
  //   if (initialsRef.current !== null) {
  //     initialsRef.current.style.fill = "white";
  //   }
  // }, 1500);

  return (
    <section className="hero-wrapper">
      <div className="jpl-svg">
        {/* <svg
          //  width={width} height={height / 2}
          width="529"
          height="251"
          viewBox="0 0 529 251"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={loaded ? "initials-svg" : "initials-svg-before"}
            ref={initialsRef}
            d="M38.45 250.45C31.2167 250.45 24.3333 248.35 17.8 244.15C11.2667 239.95 6.36666 233.65 3.09999 225.25C1.93333 222.217 1.23333 218.95 0.999995 215.45C0.533328 212.183 0.299994 208.917 0.299994 205.65C0.299994 202.383 0.883328 200.75 2.05 200.75C3.21666 200.75 3.8 201.683 3.8 203.55C3.8 214.517 6.6 222.8 12.2 228.4C17.5667 234 24.45 236.8 32.85 236.8C41.0167 236.8 48.95 234.467 56.65 229.8C64.1167 225.133 71.1167 219.183 77.65 211.95C88.6167 200.05 98.5333 186.517 107.4 171.35C116.5 155.95 124.667 140.083 131.9 123.75C133.767 119.783 136.45 113.483 139.95 104.85C143.45 95.9833 147.3 86.4167 151.5 76.15C155.7 65.65 159.783 56.2 163.75 47.8C167.25 39.8667 170.167 33.5667 172.5 28.9C175.067 24.2333 178.45 20.2667 182.65 17C186.85 13.7333 193.15 10.4667 201.55 7.2C197.817 7.43333 194.317 7.78333 191.05 8.24999C187.783 8.48332 185.217 8.59998 183.35 8.59998C174.483 8.83333 165.617 9.41666 156.75 10.35C147.883 11.2833 139.95 13.0333 132.95 15.6C125.95 17.9333 120.933 21.3167 117.9 25.75C115.8 28.7833 114.75 32.2833 114.75 36.25C114.75 40.2167 115.8 44.0667 117.9 47.8C120 51.5333 122.683 54.2167 125.95 55.85C126.417 56.3167 126.65 56.6667 126.65 56.9C126.65 57.3667 126.067 57.95 124.9 58.65C123.967 59.1167 122.917 59.2333 121.75 59C119.883 57.8333 117.55 55.9667 114.75 53.4C111.95 50.6 109.383 47.6833 107.05 44.65C104.95 41.6167 103.55 39.05 102.85 36.95C101.917 34.15 101.45 31.35 101.45 28.55C101.45 22.95 103.433 18.4 107.4 14.9C111.6 11.4 116.967 8.71666 123.5 6.84998C130.033 4.98333 137.033 3.7 144.5 2.99999C152.2 2.06666 159.55 1.59999 166.55 1.59999C173.783 1.36666 179.967 1.24999 185.1 1.24999H222.9C223.367 1.24999 223.6 1.36666 223.6 1.59999C223.6 2.29999 222.783 3.34999 221.15 4.74999C219.75 5.91666 218.817 6.49999 218.35 6.49999C211.817 6.73332 205.983 9.18332 200.85 13.85C195.95 18.5167 191.633 23.8833 187.9 29.95C184.4 35.7833 181.483 41.15 179.15 46.05C177.75 48.85 175.533 53.4 172.5 59.7C169.7 65.7667 166.55 72.7667 163.05 80.7C159.783 88.4 156.4 96.1 152.9 103.8C149.633 111.5 146.717 118.15 144.15 123.75C138.083 137.75 132.367 150.817 127 162.95C121.867 174.85 116.15 186.05 109.85 196.55C103.55 207.05 95.7333 217.317 86.4 227.35C80.5667 233.65 73.2167 239.017 64.35 243.45C55.25 248.117 46.6167 250.45 38.45 250.45ZM153.994 198.65C152.36 198.65 151.077 198.183 150.144 197.25C149.21 196.55 149.21 195.967 150.144 195.5C155.277 194.567 159.71 192.7 163.444 189.9C167.177 186.867 170.21 183.133 172.544 178.7C177.444 170.533 182.227 162.367 186.894 154.2C191.794 145.8 196.46 137.4 200.894 129C206.26 118.733 211.744 108.467 217.344 98.2C222.944 87.7 228.544 77.3167 234.144 67.05C239.51 57.4833 244.294 48.2667 248.494 39.4C252.694 30.5333 255.844 24.1167 257.944 20.15C259.577 17.1167 262.377 14.4333 266.344 12.1C270.544 9.53333 274.627 7.54999 278.594 6.14999C277.194 6.14999 275.794 6.14999 274.394 6.14999C272.994 5.91666 271.477 5.8 269.844 5.8C262.61 5.8 254.677 6.26667 246.044 7.2C237.644 7.89999 229.36 9.06666 221.194 10.7C213.26 12.3333 206.26 14.55 200.194 17.35C194.127 20.15 190.044 23.5333 187.944 27.5C187.01 29.6 186.194 31.7 185.494 33.8C184.794 35.9 184.444 38 184.444 40.1C184.444 45.4667 186.31 49.3167 190.044 51.65C190.277 51.65 190.394 51.8833 190.394 52.35C190.394 52.8167 189.927 53.2833 188.994 53.75C188.294 54.2167 187.71 54.3333 187.244 54.1C184.91 52.9333 182.227 50.1333 179.194 45.7C176.394 41.0333 174.527 37.1833 173.594 34.15C172.894 31.35 172.544 28.7833 172.544 26.45C172.544 20.3833 174.527 15.7167 178.494 12.45C182.46 8.95 187.477 6.5 193.544 5.09999C199.61 3.46666 205.794 2.53332 212.094 2.29998C218.627 1.83332 224.344 1.59999 229.244 1.59999C236.71 1.59999 245.577 1.59999 255.844 1.59999C266.11 1.36666 275.56 1.24999 284.194 1.24999C286.294 1.24999 288.627 1.24999 291.194 1.24999C293.76 1.01666 296.444 0.899999 299.244 0.899999C305.544 0.899999 312.077 1.24999 318.844 1.94999C325.61 2.64999 331.794 4.16666 337.394 6.49999C342.994 8.83332 347.31 12.45 350.344 17.35C355.01 24.5833 357.344 32.2833 357.344 40.45C357.344 49.55 354.66 58.1833 349.294 66.35C344.16 74.2833 337.627 81.2833 329.694 87.35C321.76 93.4167 313.71 98.0833 305.544 101.35C297.844 104.383 289.21 106.483 279.644 107.65C270.31 108.817 261.91 109.4 254.444 109.4C252.11 109.4 249.777 109.4 247.444 109.4C245.344 109.167 243.477 108.933 241.844 108.7C241.377 108.7 241.144 108.467 241.144 108C241.144 107.067 242.077 105.783 243.944 104.15C245.81 102.283 247.327 101.467 248.494 101.7C250.36 101.933 252.227 102.05 254.094 102.05C255.96 102.05 257.944 102.05 260.044 102.05C268.91 102.05 278.36 100.883 288.394 98.55C298.427 96.2167 307.644 91.7833 316.044 85.25C324.677 78.4833 331.21 68.6833 335.644 55.85C336.81 53.05 337.51 50.25 337.744 47.45C338.21 44.4167 338.444 41.5 338.444 38.7C338.444 30.7667 336.46 23.7667 332.494 17.7C328.527 11.6333 322.81 8.13332 315.344 7.2C314.41 6.96666 313.36 6.84998 312.194 6.84998C311.027 6.84998 309.86 6.84998 308.694 6.84998C304.26 6.84998 299.36 7.43332 293.994 8.59998C288.86 9.76665 285.01 11.9833 282.444 15.25C276.61 22.95 271.01 31.7 265.644 41.5C260.277 51.0667 255.144 60.8667 250.244 70.9C245.344 80.7 240.677 89.9167 236.244 98.55C235.077 100.883 232.86 105.083 229.594 111.15C226.327 116.983 222.71 123.75 218.744 131.45C214.777 138.917 211.044 146.383 207.544 153.85C204.044 161.317 201.244 167.967 199.144 173.8C197.277 179.633 196.81 183.6 197.744 185.7C197.977 185.933 198.094 186.283 198.094 186.75C198.094 187.45 197.744 187.8 197.044 187.8C195.177 187.8 193.31 187.333 191.444 186.4C189.577 185.467 187.36 185 184.794 185C182.46 185 180.127 185.583 177.794 186.75C175.46 187.683 172.427 189.433 168.694 192C164.96 194.567 160.76 196.667 156.094 198.3C155.627 198.533 154.927 198.65 153.994 198.65ZM341.249 194.45C341.016 194.683 340.783 194.8 340.549 194.8C339.849 194.8 339.499 193.75 339.499 191.65C339.499 190.25 339.849 188.85 340.549 187.45C341.483 185.817 343.116 184.883 345.449 184.65C351.983 184.183 358.166 181.967 363.999 178C369.833 174.033 374.966 169.367 379.399 164C383.833 158.4 386.983 153.15 388.849 148.25L421.049 67.75C425.483 56.7833 430.499 46.1667 436.099 35.9C441.933 25.6333 449.283 17.2333 458.149 10.7C467.249 4.16666 478.683 0.899999 492.449 0.899999C497.816 0.899999 503.183 1.6 508.549 2.99999C514.149 4.16666 518.816 6.14999 522.549 8.95C526.283 11.75 528.149 15.7167 528.149 20.85C528.149 21.55 528.149 22.25 528.149 22.95C528.149 23.65 528.033 24.35 527.799 25.05C527.099 28.7833 524.999 32.5167 521.499 36.25C518.233 39.9833 515.666 44.65 513.799 50.25C513.566 51.8833 512.516 52.7 510.649 52.7C509.016 52.7 508.666 51.65 509.599 49.55C511.466 46.75 512.866 43.4833 513.799 39.75C514.966 35.7833 515.549 31.8167 515.549 27.85C515.549 21.7833 514.149 16.4167 511.349 11.75C508.549 7.08332 503.766 4.74999 496.999 4.74999C490.933 4.74999 484.749 6.49999 478.449 9.99999C472.149 13.5 466.666 19.5667 461.999 28.2L397.249 147.55C391.183 158.75 385.583 166.8 380.449 171.7C375.549 176.367 371.466 179.283 368.199 180.45H452.549C463.749 180.45 474.133 180.1 483.699 179.4C493.266 178.7 499.099 176.95 501.199 174.15C503.533 170.883 504.699 167.383 504.699 163.65C504.699 157.817 501.549 153.5 495.249 150.7C494.549 150.233 494.199 149.767 494.199 149.3C494.199 148.833 494.433 148.367 494.899 147.9C495.599 147.433 496.416 147.433 497.349 147.9C499.449 148.833 501.899 150.933 504.699 154.2C507.733 157.233 510.533 160.617 513.099 164.35C515.666 167.85 517.299 170.65 517.999 172.75C518.699 174.85 519.049 176.95 519.049 179.05C519.049 188.617 510.766 193.4 494.199 193.4C481.133 193.4 467.133 192.933 452.199 192C437.266 191.067 422.449 190.017 407.749 188.85C393.283 187.683 379.633 186.867 366.799 186.4C361.899 185.933 356.999 186.633 352.099 188.5C347.433 190.133 343.816 192.117 341.249 194.45Z"
            // fill="white"
            stroke="black"
            strokeWidth={10}
          />
        </svg> */}
        <span>
          {width} {height}
        </span>
        {/* <svg width="529" height="251" viewBox="0 0 529 251" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        {/* <svg viewBox={`0 0 ${width/2} ${height}`} fill="none" preserveAspectRatio="none"> */}
        <svg viewBox={`0 0 ${'100%'} ${'100%'}`} fill="none" preserveAspectRatio="none">

          <path
            // ref={initialsRef1}
            // className={loaded ? "initials-svg" : "initials-svg-before1 initials-svg"}
            className="initials-svg-before1"
            d="M38.45 250.45C31.2167 250.45 24.3333 248.35 17.8 244.15C11.2667 239.95 6.36665 233.65 3.09998 225.25C1.93332 222.217 1.23332 218.95 0.999985 215.45C0.533317 212.183 0.299988 208.917 0.299988 205.65C0.299988 202.383 0.883319 200.75 2.04999 200.75C3.21665 200.75 3.79999 201.683 3.79999 203.55C3.79999 214.517 6.59999 222.8 12.2 228.4C17.5667 234 24.45 236.8 32.85 236.8C41.0167 236.8 48.95 234.467 56.65 229.8C64.1167 225.133 71.1167 219.183 77.65 211.95C88.6167 200.05 98.5333 186.517 107.4 171.35C116.5 155.95 124.667 140.083 131.9 123.75C133.767 119.783 136.45 113.483 139.95 104.85C143.45 95.9833 147.3 86.4167 151.5 76.15C155.7 65.65 159.783 56.2 163.75 47.8C167.25 39.8667 170.167 33.5667 172.5 28.9C175.067 24.2333 178.45 20.2667 182.65 17C186.85 13.7333 193.15 10.4667 201.55 7.2C197.817 7.43333 194.317 7.78332 191.05 8.24998C187.783 8.48332 185.217 8.59998 183.35 8.59998C174.483 8.83333 165.617 9.41666 156.75 10.35C147.883 11.2833 139.95 13.0333 132.95 15.6C125.95 17.9333 120.933 21.3167 117.9 25.75C115.8 28.7833 114.75 32.2833 114.75 36.25C114.75 40.2167 115.8 44.0667 117.9 47.8C120 51.5333 122.683 54.2167 125.95 55.85C126.417 56.3167 126.65 56.6667 126.65 56.9C126.65 57.3667 126.067 57.95 124.9 58.65C123.967 59.1167 122.917 59.2333 121.75 59C119.883 57.8333 117.55 55.9667 114.75 53.4C111.95 50.6 109.383 47.6833 107.05 44.65C104.95 41.6167 103.55 39.05 102.85 36.95C101.917 34.15 101.45 31.35 101.45 28.55C101.45 22.95 103.433 18.4 107.4 14.9C111.6 11.4 116.967 8.71665 123.5 6.84998C130.033 4.98333 137.033 3.7 144.5 2.99999C152.2 2.06666 159.55 1.59999 166.55 1.59999C173.783 1.36666 179.967 1.24999 185.1 1.24999H222.9C223.367 1.24999 223.6 1.36666 223.6 1.59999C223.6 2.3 222.783 3.35 221.15 4.74999C219.75 5.91666 218.817 6.49999 218.35 6.49999C211.817 6.73332 205.983 9.18332 200.85 13.85C195.95 18.5167 191.633 23.8833 187.9 29.95C184.4 35.7833 181.483 41.15 179.15 46.05C177.75 48.85 175.533 53.4 172.5 59.7C169.7 65.7667 166.55 72.7667 163.05 80.7C159.783 88.4 156.4 96.1 152.9 103.8C149.633 111.5 146.717 118.15 144.15 123.75C138.083 137.75 132.367 150.817 127 162.95C121.867 174.85 116.15 186.05 109.85 196.55C103.55 207.05 95.7333 217.317 86.4 227.35C80.5667 233.65 73.2167 239.017 64.35 243.45C55.25 248.117 46.6167 250.45 38.45 250.45Z"
            // fill="white"
            stroke="white"
            strokeWidth={5}
          />
          <path
            // ref={initialsRef2}
            // className={loaded ? "initials-svg" : "initials-svg-before2 initials-svg"}
            className="initials-svg-before2"
            d="M153.994 198.65C152.36 198.65 151.077 198.183 150.144 197.25C149.21 196.55 149.21 195.967 150.144 195.5C155.277 194.567 159.71 192.7 163.444 189.9C167.177 186.867 170.21 183.133 172.544 178.7C177.444 170.533 182.227 162.367 186.894 154.2C191.794 145.8 196.46 137.4 200.894 129C206.26 118.733 211.744 108.467 217.344 98.2C222.944 87.7 228.544 77.3167 234.144 67.05C239.51 57.4833 244.294 48.2667 248.494 39.4C252.694 30.5333 255.844 24.1167 257.944 20.15C259.577 17.1167 262.377 14.4333 266.344 12.1C270.544 9.53332 274.627 7.54999 278.594 6.14999C277.194 6.14999 275.794 6.14999 274.394 6.14999C272.994 5.91666 271.477 5.8 269.844 5.8C262.61 5.8 254.677 6.26667 246.044 7.2C237.644 7.9 229.36 9.06666 221.194 10.7C213.26 12.3333 206.26 14.55 200.194 17.35C194.127 20.15 190.044 23.5333 187.944 27.5C187.01 29.6 186.194 31.7 185.494 33.8C184.794 35.9 184.444 38 184.444 40.1C184.444 45.4667 186.31 49.3167 190.044 51.65C190.277 51.65 190.394 51.8833 190.394 52.35C190.394 52.8167 189.927 53.2833 188.994 53.75C188.294 54.2167 187.71 54.3333 187.244 54.1C184.91 52.9333 182.227 50.1333 179.194 45.7C176.394 41.0333 174.527 37.1833 173.594 34.15C172.894 31.35 172.544 28.7833 172.544 26.45C172.544 20.3833 174.527 15.7167 178.494 12.45C182.46 8.95 187.477 6.49999 193.544 5.09998C199.61 3.46666 205.794 2.53332 212.094 2.29998C218.627 1.83332 224.344 1.59999 229.244 1.59999C236.71 1.59999 245.577 1.59999 255.844 1.59999C266.11 1.36666 275.56 1.24999 284.194 1.24999C286.294 1.24999 288.627 1.24999 291.194 1.24999C293.76 1.01666 296.444 0.900002 299.244 0.900002C305.544 0.900002 312.077 1.24999 318.844 1.94998C325.61 2.64999 331.794 4.16666 337.394 6.49999C342.994 8.83332 347.31 12.45 350.344 17.35C355.01 24.5833 357.344 32.2833 357.344 40.45C357.344 49.55 354.66 58.1833 349.294 66.35C344.16 74.2833 337.627 81.2833 329.694 87.35C321.76 93.4167 313.71 98.0833 305.544 101.35C297.844 104.383 289.21 106.483 279.644 107.65C270.31 108.817 261.91 109.4 254.444 109.4C252.11 109.4 249.777 109.4 247.444 109.4C245.344 109.167 243.477 108.933 241.844 108.7C241.377 108.7 241.144 108.467 241.144 108C241.144 107.067 242.077 105.783 243.944 104.15C245.81 102.283 247.327 101.467 248.494 101.7C250.36 101.933 252.227 102.05 254.094 102.05C255.96 102.05 257.944 102.05 260.044 102.05C268.91 102.05 278.36 100.883 288.394 98.55C298.427 96.2167 307.644 91.7833 316.044 85.25C324.677 78.4833 331.21 68.6833 335.644 55.85C336.81 53.05 337.51 50.25 337.744 47.45C338.21 44.4167 338.444 41.5 338.444 38.7C338.444 30.7667 336.46 23.7667 332.494 17.7C328.527 11.6333 322.81 8.13333 315.344 7.2C314.41 6.96666 313.36 6.84998 312.194 6.84998C311.027 6.84998 309.86 6.84998 308.694 6.84998C304.26 6.84998 299.36 7.43332 293.994 8.59998C288.86 9.76665 285.01 11.9833 282.444 15.25C276.61 22.95 271.01 31.7 265.644 41.5C260.277 51.0667 255.144 60.8667 250.244 70.9C245.344 80.7 240.677 89.9167 236.244 98.55C235.077 100.883 232.86 105.083 229.594 111.15C226.327 116.983 222.71 123.75 218.744 131.45C214.777 138.917 211.044 146.383 207.544 153.85C204.044 161.317 201.244 167.967 199.144 173.8C197.277 179.633 196.81 183.6 197.744 185.7C197.977 185.933 198.094 186.283 198.094 186.75C198.094 187.45 197.744 187.8 197.044 187.8C195.177 187.8 193.31 187.333 191.444 186.4C189.577 185.467 187.36 185 184.794 185C182.46 185 180.127 185.583 177.794 186.75C175.46 187.683 172.427 189.433 168.694 192C164.96 194.567 160.76 196.667 156.094 198.3C155.627 198.533 154.927 198.65 153.994 198.65Z"
            // fill="white"
            stroke="white"
            strokeWidth={5}
          />
          <path
            // ref={initialsRef3}
            // className={loaded ? "initials-svg" : "initials-svg-before3 initials-svg"}
            className="initials-svg-before3"
            d="M341.249 194.45C341.016 194.683 340.783 194.8 340.549 194.8C339.849 194.8 339.499 193.75 339.499 191.65C339.499 190.25 339.849 188.85 340.549 187.45C341.483 185.817 343.116 184.883 345.449 184.65C351.983 184.183 358.166 181.967 363.999 178C369.833 174.033 374.966 169.367 379.399 164C383.833 158.4 386.983 153.15 388.849 148.25L421.049 67.75C425.483 56.7833 430.499 46.1667 436.099 35.9C441.933 25.6333 449.283 17.2333 458.149 10.7C467.249 4.16666 478.683 0.900002 492.449 0.900002C497.816 0.900002 503.183 1.6 508.549 2.99999C514.149 4.16666 518.816 6.14999 522.549 8.95C526.283 11.75 528.149 15.7167 528.149 20.85C528.149 21.55 528.149 22.25 528.149 22.95C528.149 23.65 528.033 24.35 527.799 25.05C527.099 28.7833 524.999 32.5167 521.499 36.25C518.233 39.9833 515.666 44.65 513.799 50.25C513.566 51.8833 512.516 52.7 510.649 52.7C509.016 52.7 508.666 51.65 509.599 49.55C511.466 46.75 512.866 43.4833 513.799 39.75C514.966 35.7833 515.549 31.8167 515.549 27.85C515.549 21.7833 514.149 16.4167 511.349 11.75C508.549 7.08332 503.766 4.74999 496.999 4.74999C490.933 4.74999 484.749 6.49999 478.449 9.99998C472.149 13.5 466.666 19.5667 461.999 28.2L397.249 147.55C391.183 158.75 385.583 166.8 380.449 171.7C375.549 176.367 371.466 179.283 368.199 180.45H452.549C463.749 180.45 474.133 180.1 483.699 179.4C493.266 178.7 499.099 176.95 501.199 174.15C503.533 170.883 504.699 167.383 504.699 163.65C504.699 157.817 501.549 153.5 495.249 150.7C494.549 150.233 494.199 149.767 494.199 149.3C494.199 148.833 494.433 148.367 494.899 147.9C495.599 147.433 496.416 147.433 497.349 147.9C499.449 148.833 501.899 150.933 504.699 154.2C507.733 157.233 510.533 160.617 513.099 164.35C515.666 167.85 517.299 170.65 517.999 172.75C518.699 174.85 519.049 176.95 519.049 179.05C519.049 188.617 510.766 193.4 494.199 193.4C481.133 193.4 467.133 192.933 452.199 192C437.266 191.067 422.449 190.017 407.749 188.85C393.283 187.683 379.633 186.867 366.799 186.4C361.899 185.933 356.999 186.633 352.099 188.5C347.433 190.133 343.816 192.117 341.249 194.45Z"
            // fill="white"
            stroke="white"
            strokeWidth={5}
          />
        </svg>

        {/* <svg width="775" height="702" viewBox="0 0 775 702" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L36 490L575 701L774 403" stroke="black"/>
</svg> */}
      </div>
    </section>
  );
}

// <svg width="529" height="251" viewBox="0 0 529 251" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M38.45 250.45C31.2167 250.45 24.3333 248.35 17.8 244.15C11.2667 239.95 6.36666 233.65 3.09999 225.25C1.93333 222.217 1.23333 218.95 0.999995 215.45C0.533328 212.183 0.299994 208.917 0.299994 205.65C0.299994 202.383 0.883328 200.75 2.05 200.75C3.21666 200.75 3.8 201.683 3.8 203.55C3.8 214.517 6.6 222.8 12.2 228.4C17.5667 234 24.45 236.8 32.85 236.8C41.0167 236.8 48.95 234.467 56.65 229.8C64.1167 225.133 71.1167 219.183 77.65 211.95C88.6167 200.05 98.5333 186.517 107.4 171.35C116.5 155.95 124.667 140.083 131.9 123.75C133.767 119.783 136.45 113.483 139.95 104.85C143.45 95.9833 147.3 86.4167 151.5 76.15C155.7 65.65 159.783 56.2 163.75 47.8C167.25 39.8667 170.167 33.5667 172.5 28.9C175.067 24.2333 178.45 20.2667 182.65 17C186.85 13.7333 193.15 10.4667 201.55 7.2C197.817 7.43333 194.317 7.78333 191.05 8.24999C187.783 8.48332 185.217 8.59998 183.35 8.59998C174.483 8.83333 165.617 9.41666 156.75 10.35C147.883 11.2833 139.95 13.0333 132.95 15.6C125.95 17.9333 120.933 21.3167 117.9 25.75C115.8 28.7833 114.75 32.2833 114.75 36.25C114.75 40.2167 115.8 44.0667 117.9 47.8C120 51.5333 122.683 54.2167 125.95 55.85C126.417 56.3167 126.65 56.6667 126.65 56.9C126.65 57.3667 126.067 57.95 124.9 58.65C123.967 59.1167 122.917 59.2333 121.75 59C119.883 57.8333 117.55 55.9667 114.75 53.4C111.95 50.6 109.383 47.6833 107.05 44.65C104.95 41.6167 103.55 39.05 102.85 36.95C101.917 34.15 101.45 31.35 101.45 28.55C101.45 22.95 103.433 18.4 107.4 14.9C111.6 11.4 116.967 8.71666 123.5 6.84998C130.033 4.98333 137.033 3.7 144.5 2.99999C152.2 2.06666 159.55 1.59999 166.55 1.59999C173.783 1.36666 179.967 1.24999 185.1 1.24999H222.9C223.367 1.24999 223.6 1.36666 223.6 1.59999C223.6 2.29999 222.783 3.34999 221.15 4.74999C219.75 5.91666 218.817 6.49999 218.35 6.49999C211.817 6.73332 205.983 9.18332 200.85 13.85C195.95 18.5167 191.633 23.8833 187.9 29.95C184.4 35.7833 181.483 41.15 179.15 46.05C177.75 48.85 175.533 53.4 172.5 59.7C169.7 65.7667 166.55 72.7667 163.05 80.7C159.783 88.4 156.4 96.1 152.9 103.8C149.633 111.5 146.717 118.15 144.15 123.75C138.083 137.75 132.367 150.817 127 162.95C121.867 174.85 116.15 186.05 109.85 196.55C103.55 207.05 95.7333 217.317 86.4 227.35C80.5667 233.65 73.2167 239.017 64.35 243.45C55.25 248.117 46.6167 250.45 38.45 250.45ZM153.994 198.65C152.36 198.65 151.077 198.183 150.144 197.25C149.21 196.55 149.21 195.967 150.144 195.5C155.277 194.567 159.71 192.7 163.444 189.9C167.177 186.867 170.21 183.133 172.544 178.7C177.444 170.533 182.227 162.367 186.894 154.2C191.794 145.8 196.46 137.4 200.894 129C206.26 118.733 211.744 108.467 217.344 98.2C222.944 87.7 228.544 77.3167 234.144 67.05C239.51 57.4833 244.294 48.2667 248.494 39.4C252.694 30.5333 255.844 24.1167 257.944 20.15C259.577 17.1167 262.377 14.4333 266.344 12.1C270.544 9.53333 274.627 7.54999 278.594 6.14999C277.194 6.14999 275.794 6.14999 274.394 6.14999C272.994 5.91666 271.477 5.8 269.844 5.8C262.61 5.8 254.677 6.26667 246.044 7.2C237.644 7.89999 229.36 9.06666 221.194 10.7C213.26 12.3333 206.26 14.55 200.194 17.35C194.127 20.15 190.044 23.5333 187.944 27.5C187.01 29.6 186.194 31.7 185.494 33.8C184.794 35.9 184.444 38 184.444 40.1C184.444 45.4667 186.31 49.3167 190.044 51.65C190.277 51.65 190.394 51.8833 190.394 52.35C190.394 52.8167 189.927 53.2833 188.994 53.75C188.294 54.2167 187.71 54.3333 187.244 54.1C184.91 52.9333 182.227 50.1333 179.194 45.7C176.394 41.0333 174.527 37.1833 173.594 34.15C172.894 31.35 172.544 28.7833 172.544 26.45C172.544 20.3833 174.527 15.7167 178.494 12.45C182.46 8.95 187.477 6.5 193.544 5.09999C199.61 3.46666 205.794 2.53332 212.094 2.29998C218.627 1.83332 224.344 1.59999 229.244 1.59999C236.71 1.59999 245.577 1.59999 255.844 1.59999C266.11 1.36666 275.56 1.24999 284.194 1.24999C286.294 1.24999 288.627 1.24999 291.194 1.24999C293.76 1.01666 296.444 0.899999 299.244 0.899999C305.544 0.899999 312.077 1.24999 318.844 1.94999C325.61 2.64999 331.794 4.16666 337.394 6.49999C342.994 8.83332 347.31 12.45 350.344 17.35C355.01 24.5833 357.344 32.2833 357.344 40.45C357.344 49.55 354.66 58.1833 349.294 66.35C344.16 74.2833 337.627 81.2833 329.694 87.35C321.76 93.4167 313.71 98.0833 305.544 101.35C297.844 104.383 289.21 106.483 279.644 107.65C270.31 108.817 261.91 109.4 254.444 109.4C252.11 109.4 249.777 109.4 247.444 109.4C245.344 109.167 243.477 108.933 241.844 108.7C241.377 108.7 241.144 108.467 241.144 108C241.144 107.067 242.077 105.783 243.944 104.15C245.81 102.283 247.327 101.467 248.494 101.7C250.36 101.933 252.227 102.05 254.094 102.05C255.96 102.05 257.944 102.05 260.044 102.05C268.91 102.05 278.36 100.883 288.394 98.55C298.427 96.2167 307.644 91.7833 316.044 85.25C324.677 78.4833 331.21 68.6833 335.644 55.85C336.81 53.05 337.51 50.25 337.744 47.45C338.21 44.4167 338.444 41.5 338.444 38.7C338.444 30.7667 336.46 23.7667 332.494 17.7C328.527 11.6333 322.81 8.13332 315.344 7.2C314.41 6.96666 313.36 6.84998 312.194 6.84998C311.027 6.84998 309.86 6.84998 308.694 6.84998C304.26 6.84998 299.36 7.43332 293.994 8.59998C288.86 9.76665 285.01 11.9833 282.444 15.25C276.61 22.95 271.01 31.7 265.644 41.5C260.277 51.0667 255.144 60.8667 250.244 70.9C245.344 80.7 240.677 89.9167 236.244 98.55C235.077 100.883 232.86 105.083 229.594 111.15C226.327 116.983 222.71 123.75 218.744 131.45C214.777 138.917 211.044 146.383 207.544 153.85C204.044 161.317 201.244 167.967 199.144 173.8C197.277 179.633 196.81 183.6 197.744 185.7C197.977 185.933 198.094 186.283 198.094 186.75C198.094 187.45 197.744 187.8 197.044 187.8C195.177 187.8 193.31 187.333 191.444 186.4C189.577 185.467 187.36 185 184.794 185C182.46 185 180.127 185.583 177.794 186.75C175.46 187.683 172.427 189.433 168.694 192C164.96 194.567 160.76 196.667 156.094 198.3C155.627 198.533 154.927 198.65 153.994 198.65ZM341.249 194.45C341.016 194.683 340.783 194.8 340.549 194.8C339.849 194.8 339.499 193.75 339.499 191.65C339.499 190.25 339.849 188.85 340.549 187.45C341.483 185.817 343.116 184.883 345.449 184.65C351.983 184.183 358.166 181.967 363.999 178C369.833 174.033 374.966 169.367 379.399 164C383.833 158.4 386.983 153.15 388.849 148.25L421.049 67.75C425.483 56.7833 430.499 46.1667 436.099 35.9C441.933 25.6333 449.283 17.2333 458.149 10.7C467.249 4.16666 478.683 0.899999 492.449 0.899999C497.816 0.899999 503.183 1.6 508.549 2.99999C514.149 4.16666 518.816 6.14999 522.549 8.95C526.283 11.75 528.149 15.7167 528.149 20.85C528.149 21.55 528.149 22.25 528.149 22.95C528.149 23.65 528.033 24.35 527.799 25.05C527.099 28.7833 524.999 32.5167 521.499 36.25C518.233 39.9833 515.666 44.65 513.799 50.25C513.566 51.8833 512.516 52.7 510.649 52.7C509.016 52.7 508.666 51.65 509.599 49.55C511.466 46.75 512.866 43.4833 513.799 39.75C514.966 35.7833 515.549 31.8167 515.549 27.85C515.549 21.7833 514.149 16.4167 511.349 11.75C508.549 7.08332 503.766 4.74999 496.999 4.74999C490.933 4.74999 484.749 6.49999 478.449 9.99999C472.149 13.5 466.666 19.5667 461.999 28.2L397.249 147.55C391.183 158.75 385.583 166.8 380.449 171.7C375.549 176.367 371.466 179.283 368.199 180.45H452.549C463.749 180.45 474.133 180.1 483.699 179.4C493.266 178.7 499.099 176.95 501.199 174.15C503.533 170.883 504.699 167.383 504.699 163.65C504.699 157.817 501.549 153.5 495.249 150.7C494.549 150.233 494.199 149.767 494.199 149.3C494.199 148.833 494.433 148.367 494.899 147.9C495.599 147.433 496.416 147.433 497.349 147.9C499.449 148.833 501.899 150.933 504.699 154.2C507.733 157.233 510.533 160.617 513.099 164.35C515.666 167.85 517.299 170.65 517.999 172.75C518.699 174.85 519.049 176.95 519.049 179.05C519.049 188.617 510.766 193.4 494.199 193.4C481.133 193.4 467.133 192.933 452.199 192C437.266 191.067 422.449 190.017 407.749 188.85C393.283 187.683 379.633 186.867 366.799 186.4C361.899 185.933 356.999 186.633 352.099 188.5C347.433 190.133 343.816 192.117 341.249 194.45Z" fill="black"/>
// </svg>
