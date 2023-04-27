// //@ts-check
import React, { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import usePwToggle from "../hooks/usePwToggle";
import { login } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isAuthenticated,
    // user
  } = useSelector((state) => state.userAuth);

  const emailRef = useRef(null);
  const [InputType, Icon, toggleVisiblity] = usePwToggle();

  const handleProvidersSignUp = async (e) => {
    e.preventDefault();
    // console.log(testUser);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (emailRef.current !== null) emailRef.current.focus();

    if (isAuthenticated) {
      navigate("/dashboard/");
    }
  }, [navigate, isAuthenticated]);
  return (
    <div className="bg-container">
      <div className="login-container">
        <img
          src="https://res.cloudinary.com/hire-station/image/upload/v1682414579/docsumo/docsumo-logo.715f44299e52958cc75d_sf1tbo.png"
          alt="docsumo-label"
          className="docsumo-image"
        />

        <div className="login-box-content">
          <form className="login-box">
            <span className="login-label">Login to your Docsumo account</span>
            <div className="buttons-container">
              <button
                className="google-sign-in-button-0auth"
                onClick={handleProvidersSignUp}
              >
                <FcGoogle size={30} className="auth-providers-icon" />
                <span>Sign in with Google</span>
              </button>
              <button
                className="microsoft-sign-in-button-0auth"
                onClick={handleProvidersSignUp}
              >
                <img
                  src="https://res.cloudinary.com/hire-station/image/upload/v1682423554/docsumo/microsoft-fotor-bg-remover-20230425173714_v1hpq9.png"
                  alt="microsoft"
                  className="auth-providers-icon-microsoft"
                />
                Sign in with Microsoft
              </button>
            </div>
            <div className="optional-or-label">
              <span className="or-label">OR</span>
            </div>
            <div className="email-container">
              <label htmlFor="email" className="form-label">
                Work Email
              </label>
              <input
                name="email"
                type="email"
                value={email}
                className="form-input-field"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-container">
              <label htmlFor="email" className="form-label">
                Password
              </label>
              <div className="password-control">
                <input
                  name="password"
                  type={InputType}
                  // type="password"
                  value={password}
                  className="form-input-field"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="password-toggle-icon"
                  style={{ color: "#000" }}
                  onClick={toggleVisiblity}
                >
                  {Icon}
                  {/* Hello efef wwd */}
                </span>
              </div>
            </div>
            <p className="forgot-password-span">Forgot Password?</p>
            {/* <UsePasswordToggle /> */}
            {/* <UsePasswordToggle /> */}
            {/* <usePwToggle /> */}
            {/* <FontAwesomeIcon icon={"eye"} />
            <AiOutlineEye /> */}
            {/* <span>{Icon}</span> */}
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
            <p className="login-SSO-label">Login with SSO</p>
            <p className="no-account-label">
              Don't have an account?{" "}
              <span className="sign-up-label">Sign Up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
