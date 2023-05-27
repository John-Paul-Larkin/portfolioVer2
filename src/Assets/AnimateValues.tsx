const animate = {
  opacity: 1,
  y: 0,
  x: 0,
  transition: {
    ease: "easeOut",
    duration: 0.3,
  },
};

const initial = {
  opacity: 0.1,
  y: 20,
};

const initialLeft = {
  opacity: 0.1,
  x: -20,
};

const initialRight = {
  opacity: 0.1,
  x: 20,
};

const contactFormAnimation = {
  initial: { opacity: 0.1, y: 10 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.25, ease: "easeOut" } },
};

const animationContactFormBorder = {
  initial: { opacity: 0.1, width: "80%" },
  animate: { opacity: 1, width: "90%", transition: { delay: 0.2, duration: 0.25, ease: "easeIn" } },
};

export { animate, initial, initialLeft, initialRight, contactFormAnimation, animationContactFormBorder };
