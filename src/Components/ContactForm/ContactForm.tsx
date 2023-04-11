 import { motion } from "framer-motion";
import { useRef } from "react";
import TextScrollHighlight from "../Projects/MainProject/TextScrollHighlight";
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

  const animation = {
    initial: { opacity: 0.1, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.25, ease: "easeOut" } },
  };

  const animationBorder = {
    initial: { opacity: 0.1, width: "70%" },
    animate: { opacity: 1, width: "90%", transition: { delay: 0.2, duration: 0.25, ease: "easeIn" } },
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="heading">
          <TextScrollHighlight>
              <h2>Get in touch!</h2>
          </TextScrollHighlight>
          <motion.p whileInView={animation.animate} initial={animation.initial}>
            Comments, suggestions, or just want to say hello?
          </motion.p>
          <motion.p whileInView={animation.animate} initial={animation.initial}>
            I'd love to hear from you.
          </motion.p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <motion.div className="inputs" whileInView={animation.animate} initial={animation.initial}>
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
              whileInView={animationBorder.animate}
              initial={animationBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" whileInView={animation.animate} initial={animation.initial}>
            <div className="label-wrapper">
              <label htmlFor="name">Name</label>
            </div>
            <motion.input
              type="text"
              name="name"
              id="name"
              className="contact-name"
              placeholder="Optional"
              ref={nameRef}
              tabIndex={2}
              whileInView={animationBorder.animate}
              initial={animationBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" whileInView={animation.animate} initial={animation.initial}>
            <div className="label-wrapper">
              <label htmlFor="message">Message</label>
            </div>
            <motion.textarea
              placeholder="Start typing..."
              className="message"
              name="message"
              ref={messageRef}
              tabIndex={3}
              initial={animationBorder.initial}
              whileInView={animationBorder.animate}
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
