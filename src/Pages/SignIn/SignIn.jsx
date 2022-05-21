import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import SocialLogin from "../../components/SocialLogin";
import auth from "../../firebase";
import "./SignIn.css";

const SignIn = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resterror] =
    useSendPasswordResetEmail(auth);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    fetch("https://radiant-lake-83898.herokuapp.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
      });
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("sent email");
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
        <ToastContainer />
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
        <div className="mb-3"></div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {errorElememt}
      <div className="d-flex justify-content-between">
        <p>
          New to carhouse?
          <Link
            to="/signup"
            className="text-primary pe-auto text-decoration-none"
          >
            Please Register
          </Link>
        </p>
        <p>
          Forget Password?
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>{" "}
        </p>
      </div>

      <SocialLogin />
    </div>
  );
};

export default SignIn;
