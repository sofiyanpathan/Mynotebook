import React from "react";

const About = () => {
  return (
    <div className="container my-3" style={{"borderStyle": "solid","backgroundColor": "lightGrey"}}>
      <h1 >About Us</h1>
      <p style={{"color": "Black","borderStyle": "outset"}} className="my-3">
        Welcome to our notes storing website! Our platform is designed to help
        you easily store,update, organize, and access your notes from anywhere, at any
        time.
      </p>

      <h2 >Our Mission</h2>
      <p style={{"color": "Black","borderStyle": "outset"}} className="my-3">
        Our mission is to provide a reliable and user-friendly platform for
        individuals and businesses to store and manage their notes. We aim to
        make note-taking a simple and hassle-free experience for everyone.
      </p>

      <h2 >Contact Us</h2>
      <p style={{"color": "Black","borderStyle": "outset"}} className="my-3">
        If you have any questions or feedback, please feel free to reach out to
        us at support@noteswebsite.com.
      </p>
    </div>
  );
};

export default About;
