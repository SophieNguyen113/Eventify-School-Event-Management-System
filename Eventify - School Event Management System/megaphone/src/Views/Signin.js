import React, {useState} from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Popup from "../Components/Popup";
import { Link } from "react-router-dom";
import "../CSS/Signin.css";

function Signin(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (username == "" || password == "") {
      return;
    }
    setUserInfo(username, password);
  }

  async function setUserInfo(username, password){
    let userInfo = await verifyPassword(username, password);
    if (userInfo == null) {
      setIsSignedIn(false);
    } else {
      setIsSignedIn(true);
      props.setUserData({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        joinedProtests: userInfo.joinedProtests
      });
    }
  }

  async function verifyPassword(username, password) {
    let userInfo = await axios.post("http://localhost:8080/user/verifyPassword", {
        username: username,
        password: password
    });
    if (userInfo.data.length == 0) {
        return null;
    } else {
        console.log(userInfo.data[0].firstName);
        return userInfo.data[0];
    }
  }

  return (
    <div>
      <NavBar firstName=""/>
      <div className="sign-in-page">
        <div className="sign-in-left">
          <h1 className="sign-in-title">Megaphone!</h1>
          <form className="sign-in-left" onSubmit={onSubmitHandler}>
            { isSubmitted && !isSignedIn ?
              <div>
                <span className="sign-in-left invalid-field-text">The username and password does not exist</span>
              </div> :
              ""
            }
            <i className="fa fa-user input-icon"></i>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            { isSubmitted && !username ?
              <div>
                <span className="sign-in-left invalid-field-text">Please enter an email address</span>
              </div> :
              ""
            }
            <i className="fa fa-key input-icon"></i>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            { isSubmitted && !password ?
              <div>
                <span className="sign-in-left invalid-field-text">Please enter a password</span>
              </div> :
              ""
            }
            <i className="fa fa-arrow-right submit-icon"></i>
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
          <h1 style={{ color: "#43b0f1" }}>Don't have an account?</h1>
          <a className="sign-up-text" href="/signup">
            <u>Sign Up</u>
          </a>
        </div>
        <div className="sign-in-right">
          <img
            className="sign-in-image"
            src={require("../Images/Signin_Image.png")}
            alt="sign in "
          />
        </div>
      </div>
      <Popup isActive={isSignedIn}>
        <h1>You have signed in successfully</h1>
        <Link to="/">
          <button style={{fontSize: "2em"}}>Return to Home Page</button>
        </Link>
      </Popup>
    </div>
  );
}

export default Signin;
