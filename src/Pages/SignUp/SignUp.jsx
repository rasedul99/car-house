import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase";
import "./SignUp.css";
const SignUp = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
    sendEmailVerification();
    alert("Sent  verification to your email");
  };
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            ref={nameRef}
            className="form-control"
            placeholder=" name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered ?
          <Link
            to="/signin"
            className="text-primary pe-auto text-decoration-none"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
