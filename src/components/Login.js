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

        <form className="login-box">
          <span className="login-label">Login to your Docsumo account</span>
          <div className="buttons-container">
            <button className="google-sign-in-button-0auth">
              <FcGoogle /> <span>Sign In with Google</span>
            </button>
            <button className="microsoft-sign-in-button-0auth">
              <img
                src="https://res.cloudinary.com/hire-station/image/upload/v1682423554/docsumo/microsoft-fotor-bg-remover-20230425173714_v1hpq9.png"
                alt="microsoft"
                className="icon"
              />
              Sign In with Microsoft
            </button>
          </div>
          <div className="optional-or-label">
            <span className="or-label">OR</span>
          </div>
          <div className="email-container">
            <label htmlFor="email">Work Email:</label>
            <input
              name="email"
              type="email"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="email">Password:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>Forgot Password?</p>

          <button>Login</button>
          <p>Login with SSO</p>
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
