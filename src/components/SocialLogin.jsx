import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase";
import google from "../images/google.png";
const SocialLogin = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElememt;
  if (error) {
    errorElememt = (
      <div>
        <p className="text-danger">Error{error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElememt}
      <div>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
