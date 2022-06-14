import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="blur"></div>
      <section className="login-dark">
        <form method="post">
          <div className="illustration">
            <h3>World On Pencil</h3>
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary d-block w-100" type="submit">
              Log In
            </button>
          </div>
          <a className="forgot" href="/register">
            Register
          </a>
          <a className="forgot" href="/recovery" style={{ marginTop: "7px" }}>
            Forgot your email or password?
          </a>
        </form>
      </section>
    </div>
  );
}

export default Login;
