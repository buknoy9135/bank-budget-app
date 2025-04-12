import "./Buttons.css";

const LoginButton = (props) => {
  const { iconSrc, label, onClick } = props;

  return (
    <button className="login-button" onClick={onClick}>
      <img src={iconSrc} className="icon" />
      <span className="label">{label}</span>
    </button>
  );
};

export default LoginButton;
