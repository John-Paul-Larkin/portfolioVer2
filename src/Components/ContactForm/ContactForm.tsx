import { motion } from "framer-motion";
import { FormEvent, useContext, useRef } from "react";
import Swal from "sweetalert2";
import { animationContactFormBorder, contactFormAnimation } from "../../Assets/AnimateValues";
import { PortfolioContext } from "../../Context/PortfolioContext";
import TextScrollHighlight from "../Projects/MainProject/TextScrollHighlight";
import "./ContactForm.css";

export default function ContactForm() {
  // contactref used for scrollbar
  const { contactRef } = useContext(PortfolioContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.currentTarget;

    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        Swal.fire({
          title: "Awesome",
          // icon: "success",
          color: "white",
          background: "#6874e8",
          imageUrl: "https://media.giphy.com/media/AgrfqPt5AyiTm/giphy.gif",
          // imageUrl: "https://media.giphy.com/media/xUA7aVZuDp4anJb3bO/giphy.gif",
          // imageUrl: "https://media.giphy.com/media/BYoRqTmcgzHcL9TCy1/giphy.gif",

          imageWidth: 400,
          // imageHeight: 200,
          showConfirmButton: false,
          timer: 2500,
        });
        formRef.current?.reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `Oops something went wrong- ${error}`,
          icon: "error",
        });
      });
  };

  return (
    <section className="contact" ref={contactRef}>
      <div className="container">
        <div className="heading">
          <TextScrollHighlight>
            <h2>Get in touch!</h2>
          </TextScrollHighlight>
          <motion.p whileInView={contactFormAnimation.animate} initial={contactFormAnimation.initial}>
            Comments, suggestions, or just want to say hello?
          </motion.p>
          <motion.p whileInView={contactFormAnimation.animate} initial={contactFormAnimation.initial}>
            I'd love to hear from you.
          </motion.p>
        </div>

        <form name="contactF" className="form" method="POST" data-netlify="true" onSubmit={handleSubmit} ref={formRef}>
          <input type="hidden" name="form-name" value="contactF" />

          <motion.div className="inputs" whileInView={contactFormAnimation.animate} initial={contactFormAnimation.initial}>
            <div className="label-wrapper">
              <label htmlFor="email">Email Address</label>
            </div>
            <motion.input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="youremail@corp.com"
              required
              tabIndex={1}
              whileInView={animationContactFormBorder.animate}
              initial={animationContactFormBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" whileInView={contactFormAnimation.animate} initial={contactFormAnimation.initial}>
            <div className="label-wrapper">
              <label htmlFor="name">Name</label>
            </div>
            <motion.input
              type="text"
              name="name"
              id="name"
              className="contact-name"
              placeholder="Optional"
              tabIndex={2}
              whileInView={animationContactFormBorder.animate}
              initial={animationContactFormBorder.initial}
            />
          </motion.div>

          <motion.div className="inputs" whileInView={contactFormAnimation.animate} initial={contactFormAnimation.initial}>
            <div className="label-wrapper">
              <label htmlFor="message">Message</label>
            </div>
            <motion.textarea
              placeholder="Start typing..."
              className="message"
              name="message"
              tabIndex={3}
              initial={animationContactFormBorder.initial}
              whileInView={animationContactFormBorder.animate}
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
