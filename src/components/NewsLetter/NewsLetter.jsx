import React from "react";

const NewsLetter = () => {
  return (
    <div className=" row d-flex align-items-center my-5 ">
      <div className="col-md-6">
        <img
          className="img-fluid img-thumbnail"
          src="https://chamaileon.io/wp-content/uploads/2017/09/Email-Newsletter-Design-1.svg"
        />
      </div>

      <div className="col-md-6 d-flex align-items-center ">
        <div>
          <h3>Subscribe to our NewsLetter!</h3>
          <p>Subscribe to our newslatter and stay updated.</p>

          <p>Your email:</p>
          <input placeholder="Your Email" />
          <p>We'll never share your details.</p>
          <input type="submit" value="Subscribe" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
