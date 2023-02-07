import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div className="background">
      <h1 style={{ color: "white", textAlign: "center" }}>Contact Us</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <label style={{ color: "white" }}>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label style={{ color: "white" }}>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label style={{ color: "white" }}>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <h2 style={{ color: "white", textAlign: "center" }}>
        Follow us on social media for the latest music updates:
      </h2>
      <ul
        style={{ display: "flex", justifyContent: "center", listStyle: "none" }}
      >
        <li style={{ marginRight: "20px" }}>
          <a href="https://www.facebook.com/music" style={{ color: "white" }}>
            Facebook
          </a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="https://www.twitter.com/music" style={{ color: "white" }}>
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/music" style={{ color: "white" }}>
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
