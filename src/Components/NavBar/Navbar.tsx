import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  //   useEffect(() => {
  //     const handleScroll = (e:Event) => {
  //       console.log(e);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  const [scrollDir, setScrollDir] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    setTimeout(() => {
      setScrollDir(false);
    }, 2000);
  }, []);

  return (
    <nav className={scrollDir ? "nav nav-down" : "nav"}>
      <ul>
        <li>
          <a className={scrollDir ? "link down" : "link"} href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className={scrollDir ? "link down" : "link"} href="#email">
            CONTACT
          </a>
        </li>
        <li>
          <a className={scrollDir ? "link down" : "link"} href="#dev-icons">
            SKILLS
          </a>
        </li>
      </ul>
    </nav>
  );
}
