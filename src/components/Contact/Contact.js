import React from "react";

import classes from "./Contact.module.css";

const contact = () => {
  return (
    <div id="contacts" className={classes.Contact}>
      <div className={classes.boxContainer}>
        <form
          action="https://getform.io/f/d95c6286-2424-489d-a80f-b7285ec54d7a"
          method="POST"
        >
          <h1>Contact</h1>
          <p>Leave a message. Let's connect!</p>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Enter Email" name="email" />
          <textarea
            rows="10"
            cols="30"
            name="message"
            placeholder="Your message..."
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
