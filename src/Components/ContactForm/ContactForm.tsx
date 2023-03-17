import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./ContactForm.css";

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      firstName: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data");
  };

  const controls = useAnimation();
  const controlsBorder = useAnimation();
  const animateRef = useRef(null);
  const isInView = useInView(animateRef);

  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.25, ease: "easeOut" } },
  };

  const animationBorder = {
    initial: { opacity: 0, width: "50%" },
    animate: { opacity: 1, width: "90%", transition: { delay: 0.1, duration: 0.25, ease: "easeIn" } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start(animation.animate);
      controlsBorder.start(animationBorder.animate);
    } else {
      controls.start(animation.initial);
      controlsBorder.start(animationBorder.initial);
    }
  }, [controls, isInView, animation.animate, animation.initial, animationBorder.animate, animationBorder.initial, controlsBorder]);

  return (
    <section className="contact">
      {/* <SectionHeading heading="Get in touch!" /> */}
      <div className="container">
        <div className="heading">
          <h3>Get in touch!</h3>
          <motion.p animate={controls} initial={animation.initial}>
            Comments, suggestions, or just want to say hello?
          </motion.p>
          <motion.p animate={controls} initial={animation.initial}>
            I'd love to hear from you.
          </motion.p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <motion.div className="inputs" animate={controls} initial={animation.initial} ref={animateRef}>
            <div className="label-wrapper">
              <label htmlFor="email">Email Address</label>
            </div>
            <motion.input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="youremail@corp.com"
              ref={emailRef}
              tabIndex={1}
              animate={controlsBorder}
              initial={animationBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" animate={controls} initial={animation.initial}>
            <div className="label-wrapper">
              <label htmlFor="name">Name</label>
            </div>
            <motion.input
              type="text"
              name="name"
              id="name"
              className="name"
              placeholder="Optional"
              ref={nameRef}
              tabIndex={2}
              animate={controlsBorder}
              initial={animation.initial}
            />
          </motion.div>

          <motion.div className="inputs" animate={controls} initial={animation.initial}>
            <div className="label-wrapper">
              <label htmlFor="message">Message</label>
            </div>
            <motion.textarea
              placeholder="Start typing..."
              className="message"
              name="message"
              ref={messageRef}
              tabIndex={3}
              animate={controlsBorder}
              initial={animationBorder.initial}
            ></motion.textarea>
          </motion.div>

          <div className="inputs">
            <button type="submit" className="btn-send" tabIndex={4}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
