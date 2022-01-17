import React from "react";

const Login = () => {
  return (
    <>
      <form className="d-grid gap-2 d-block align-items-end justify-items-center">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
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
            Password
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
            By creating an account, you agree to the Terms & Conditions.
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
