import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import auth from "../../firebase";
import "./SignIn.css";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  console.log(user);
  if (user) {
    Navigate("/home");
  }
  let errorElememt;
  if (error) {
    errorElememt = (
      <div>
        <p className="text-danger">Error{error.message}</p>
      </div>
    );
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3"></div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      {errorElememt}
      <SocialLogin />
    </div>
  );
};

export default SignIn;
