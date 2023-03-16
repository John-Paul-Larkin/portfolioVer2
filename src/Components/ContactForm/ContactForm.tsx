import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
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
    animate: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.75, ease: "easeInOut" } },
  };

  const animationBorder = {
    initial: { opacity: 0, width: 0 },
    animate: { opacity: 1, width: "90%", transition: { delay: 0.3, duration: .9, ease: "easeInOut" } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start(animation.animate);
      controlsBorder.start(animationBorder.animate);
    } else {
      controls.start(animation.initial);
      controlsBorder.start(animationBorder.initial);
    }
  }, [controls, isInView]);


  return (
    <section className="contact">
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <motion.div className="inputs" ref={animateRef} animate={controls} initial={animation.initial}>
            <div className="label-wrapper">
              <label htmlFor="name">Your Name</label>
            </div>
            <motion.input
              type="text"
              name="name"
              id="name"
              className="name"
              placeholder="name"
              ref={nameRef}
              tabIndex={1}
              animate={controlsBorder}
              initial={animationBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" ref={animateRef} animate={controls} initial={animation.initial}>
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
              tabIndex={2}
              animate={controlsBorder}
              initial={animationBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" ref={animateRef} animate={controls} initial={animation.initial}>
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
            <button type="submit" className="send" tabIndex={4}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
