import { motion } from "framer-motion";
import cloud from "../../Assets/Images/cloud.png";
import "./clouds.css";

export default function Clouds() {
  const randomStartPosition = () => {
    let positionNumber = Math.floor(Math.random() * (100 - 20 + 1) + 10);

    positionNumber *= Math.round(Math.random()) ? 1 : -1;

    const positionAsString = `${String(positionNumber)}vw`;
    console.log(positionAsString);
    return positionAsString;
  };

  const initial1 = { x: "-5vw", scale: 1 };
  const initial2 = { x: "-5vw", scale: 0.7 };
  const initial3 = { x: randomStartPosition(), scale: 0.5 };
  const initial4 = { x: randomStartPosition(), scale: 0.2 };
  const initial5 = { x: randomStartPosition(), scale: 0.3 };
  const initial6 = { x: randomStartPosition(), scale: 0.3 };
  const initial7 = { x: randomStartPosition(), scale: 0.2 };
  const initial8 = { x: '0vw', scale: 0.1 };

  const animate1 = { x: "100vw", transition: { repeat: Infinity, duration: 110, ease: "linear" } };
  const animate2 = { x: "100vw", transition: { repeat: Infinity, duration: 40, ease: "linear" } };
  const animate3 = { x: "100vw", transition: { repeat: Infinity, duration: 73, ease: "linear" } };
  const animate4 = { x: "100vw", transition: { repeat: Infinity, duration: 42, ease: "linear" } };
  const animate5 = { x: "100vw", transition: { repeat: Infinity, duration: 37, ease: "linear" } };
  const animate6 = { x: "100vw", transition: { repeat: Infinity, duration: 48, ease: "linear" } };
  const animate7 = { x: "100vw", transition: { repeat: Infinity, duration: 53, ease: "linear" } };
  const animate8 = { x: "100vw", transition: { repeat: Infinity, duration: 45, ease: "linear" } };

  return (
    <div className="cloud-wrapper">
      <motion.img width="254" height="141" initial={initial1} animate={animate1} className="cloud1" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial2} animate={animate2} className="cloud2" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial3} animate={animate3} className="cloud3" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial4} animate={animate4} className="cloud4" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial5} animate={animate5} className="cloud5" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial6} animate={animate6} className="cloud6" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial7} animate={animate7} className="cloud7" src={cloud} alt="a fluffy white cloud" />
      <motion.img width="254" height="141" initial={initial8} animate={animate8} className="cloud8" src={cloud} alt="a fluffy white cloud" />
    </div>
  );
}
