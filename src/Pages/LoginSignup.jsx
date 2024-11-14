import React from "react";
import "./CSS/LoginSignup.css";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    const icon = document.getElementById("password-show-icon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.replace("bi-eye-slash", "bi-eye");
    }
  };

  return (
    <section className="login-section pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="login-form-body">
              <div className="mb-4 text-center">
                <Link className="logo text-uppercase" to="/">
                  MyShop <i className="bi bi-basket"></i>
                </Link>
              </div>

              <div className="mt-5">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="password-show-icon"
                          onClick={togglePassword}
                          aria-label="Toggle password visibility"
                        >
                          <i id="password-show-icon" className="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button
                      type="submit"
                      className="myBtn w-100 rounded-25 m-0"
                    >
                      Continue
                    </button>
                  </div>
                  <div className="mb-3 text-center">
                    <p>
                      Already have an account?
                      <Link
                        className="mx-2"
                        to=""
                        style={{ color: "rgba(255, 128, 70)" }}
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                      />
                      <label className="form-check-label">
                        By continuing, I agree to terms of use & privacy policy
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
