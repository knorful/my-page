import React from "react";

import classes from "./Contact.module.css";

const contact = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.boxContainer}>
        <form>
          <h1>Contact</h1>
          <p>Leave a message. Let's connect!</p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter Email" />
          <textarea
            rows="10"
            cols="30"
            placeholder="Your message..."
          ></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
