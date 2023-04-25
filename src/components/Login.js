// //@ts-check
import React, { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current !== null) emailRef.current.focus();
  }, []);
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
              <button className="google-sign-in-button-0auth">
                <FcGoogle size={30} className="auth-providers-icon" />
                <span>Sign in with Google</span>
              </button>
              <button className="microsoft-sign-in-button-0auth">
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
              <input
                name="password"
                type="password"
                value={password}
                className="form-input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="forgot-password-span">Forgot Password?</p>

            <button className="login-btn">Login</button>
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
