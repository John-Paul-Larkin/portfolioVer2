import "./Footer.css";

import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHammer, faPersonDigging, faScrewdriver, faScrewdriverWrench, faWrench } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <p>logo</p>
      <p>Living, learning, & leveling up one day at a time.</p>
      <p>social logos Mail</p>

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
      <p>
        Handcrafted by JP
        <>
          {" "}
          {/* <FontAwesomeIcon icon={faHammer} className="hammer" /> */}
          {/* <FontAwesomeIcon icon={faScrewdriver} className="screw" /> */}
          <FontAwesomeIcon icon={faPersonDigging} className="digger" />
 
        </>
        in twentytwentythree
      </p>
{/* 
      <FontAwesomeIcon icon={faHammer} />
      <FontAwesomeIcon icon={faWrench} /> */}
    </footer>
  );
}
