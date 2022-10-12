import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { emailLogin, passwordLogin } from "../Reducer";

function Login(props) {
  const navigate = useNavigate();
  console.log(props);
  const userLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        props.reducerLogin.loginMail,
        props.reducerLogin.loginPass
      );

      localStorage.setItem("token", user.user.accessToken);
      console.log(user);
      navigate("/");
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-div">
      <div className="backdrop">
        <div className="login">
          <div>
            <h2>Login</h2>
            <p>Let us handle your finances !</p>
          </div>
          <hr />
          <form
            onSubmit={(e) => {
              userLogin(e);
            }}
          >
            <div className="form-input">
              <label htmlFor="">Email*</label> <br />
              <input
                type="email"
                name=""
                id="email"
                placeholder="What's your email?"
                required
                onChange={(e) => {
                  props.emailLogin(e.target.value);
                }}
              />
              <br />
              <br />
              <label htmlFor="">Password*</label>
              <br />
              <input
                type="password"
                name=""
                id="password"
                placeholder="Please enter your password"
                required
                onChange={(e) => {
                  props.passwordLogin(e.target.value);
                }}
              />
            </div>
            <div className="rememberme">
              <div>
                <input type="checkbox" name="" id="checkbox" />
                <label name="checkbox" htmlFor="checkbox">
                  Remember Me
                </label>
              </div>
              <button>Forget Password?</button>
            </div>
            <input type="submit" value="Login" />
          </form>
          <p className="register-p">
            Not registered yet? <Link to="/signup">Create an Account</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(gloabalstate) {
  return gloabalstate;
}

const mapdispatchtoprops = {
  emailLogin,
  passwordLogin,
};

export default connect(mapStateToProps, mapdispatchtoprops)(Login);
