import React, { ReactPropTypes, useRef } from "react";

export default function Form() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // interface FormProps {
  //   firstName: Text;
  //   lastName: Text;
  //   email: Text;
  //   message: Text;
  // }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };
    alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎");
  };

  return (
    <div className="container">
      <h3>Send me a message!</h3>
      <p>I would love to hear from you</p>
      <form onSubmit={handleSubmit} className="form">

        <div className="name">
          <label htmlFor="firstName" id="nameLabel">
            First Name
          </label>
          <input type="text" id="name" name="name" className="name" ref={firstNameRef} tabIndex={1} />

          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" className="lastName" ref={lastNameRef} tabIndex={2} />
        </div>


        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="email" placeholder="example@corp.com" ref={emailRef} tabIndex={3} />

        <label htmlFor="message">Message</label>
        <textarea placeholder="Start typing..." className="message" name="message" ref={messageRef}></textarea>
        <button type="submit" className="send">
          Send
        </button>
        
      </form>
    </div>
  );
}
