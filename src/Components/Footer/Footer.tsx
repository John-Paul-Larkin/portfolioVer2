import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const quotes = [
    [["Details make perfection, and perfection is not a detail."], ["- Leonardo Da Vinci"]],
    [["Live as if you were to die tomorrow. Learn as if you were to live forever."], ["- Mahatma Gandhi"]],
    [["It does not matter how slowly you go as long as you do not stop."], ["- Confucius"]],
    [["It always seems impossible until it's done."], ["- Nelson Mandela"]],
    [["Perseverance is not a long race; it is many short races one after the other."], ["- Walter Elliot"]],
    [["Ever tried. Ever failed. No matter. Try again. Fail again. Fail better."], ["- Samuel Beckett"]],
  ];

  const QuoteDisplay = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setQuoteIndex(() => {
          if (quoteIndex === quotes.length - 1) return 0;
          else return quoteIndex + 1;
        });
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }, [quoteIndex]);

    const quote = { animate: { transition: { staggerChildren: 2 } } };
    const author = { initial: { opacity: 0.5 }, animate: { opacity: 1, transition: { duration: 3 } } };
    const author2 = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 3 } } };

    return (
      <div className="quote-wrapper" key={quoteIndex}>
        <motion.div className="quote" initial="initial" animate="animate" variants={quote}>
          <motion.p variants={author}>{quotes[quoteIndex][0]}</motion.p>
          <motion.p className="author" variants={author2}>
            {quotes[quoteIndex][1]}
          </motion.p>
        </motion.div>
      </div>
    );
  };

  return (
    <footer className="footer">
      <QuoteDisplay />
      {/* <p>logo</p> */}

      <ul className="icons">
        {/* <li>
          <a href="" aria-label=""></a>
        </li>
        <li>
          <a href="" aria-label=""></a>
        </li>
        <li>
          <a href="" aria-label=""></a>
        </li> */}
        <li>
          <a href="" aria-label="Twitter link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Fishamble" aria-label="Github link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/JohnPaulLarkin" aria-label="facebook link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="mailto:johnplarkin@gmail.com" aria-label="Email address link">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>

      <p className="hand-crafted">
        Handcrafted by JP
        <FontAwesomeIcon icon={faPersonDigging} className="digger" />
        in twentytwentythree
      </p>
    </footer>
  );
}
