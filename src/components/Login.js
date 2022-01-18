import React from "react";

const Login = () => {
  return (
    <>
      <form className="d-grid gap-2 d-block center-block align-items-center pt-5 pb-5">
        <div class="mb-3">
          <p>
            <h2>
              <b>Login</b>
            </h2>
          </p>
          <label for="exampleInputEmail1" class="form-label">
            <b>Email</b>
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="john@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            <b>Password</b>
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="At least 8 characters"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            By creating an account, you agree to the{" "}
            <a
              href="/"
              style={{ color: "#013243", textDecoration: "underline" }}
            >
              <b>Terms & Conditions.</b>
            </a>
          </label>
        </div>
        <button
          type="submit"
          class="gap-2 btn btn-primary btn-block "
          style={{ backgroundColor: "#013243", color: "white" }}
        >
          Create an account
        </button>
      </form>
    </>
  );
};

export default Login;
