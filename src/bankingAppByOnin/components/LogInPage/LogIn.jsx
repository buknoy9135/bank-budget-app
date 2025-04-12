import "./LogIn.css";
import { useState } from "react";
import LoginButton from "../Buttons/LoginButton";
import login from "../../assets/icons/login.png";
import employeeData from "../../assets/EmployeeData.json";

const LogIn = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameErrorShow, setShowUsernameError] = useState(false);
  const [isInvalidPassword, setPasswordError] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const employeeLogin = (event) => {
    event.preventDefault();

    const employeeInfo = employeeData.find(
      (user) => user.Username === username
    );

    if (!employeeInfo) {
      setShowUsernameError(true);
      setPasswordError(false);

      return;
    }

    if (employeeInfo.Password !== password) {
      setPasswordError(true);
      setShowUsernameError(false);

      return;
    }

    if (employeeInfo) {
      setIsLoggedIn(true);

      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-div">
      <p className="login-title">AvionBank</p>

      <form className="login-form" onSubmit={employeeLogin}>
        <label className="emp-login-text">Employee Log in:</label>

        <input
          type="text"
          className="username-input"
          id="name"
          value={username}
          onChange={handleUsername}
          placeholder="Enter username"
          required
        />

        <input
          type="password"
          className="username-input"
          id="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter password"
          required
        />

        {isUsernameErrorShow && (
          <div className="username-error">
            <p>INVALID USERNAME</p>
          </div>
        )}

        {isInvalidPassword && (
          <div className="password-error">
            <p>INVALID PASSWORD</p>
          </div>
        )}

        <LoginButton iconSrc={login} label="Login" type="submit" />
      </form>
    </div>
  );
};

export default LogIn;
