import React from "react";
import "./Register.css";

function Register() {
  return (
    <div>
      <section className="login-dark">
        <form method="post">
          <div className="illustration">
            <h3>Sign Up</h3>
          </div>
          <div>
            <label htmlFor="fname">Name : </label>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <div>
              <input
                className="ml-2 form-control"
                type="fname"
                name="fname"
                placeholder="first name"
              />
            </div>

            <div>
              <input
                className="form-control ml-2"
                type="lname"
                name="lname"
                placeholder="last name"
              />
            </div>
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
              Sign up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
