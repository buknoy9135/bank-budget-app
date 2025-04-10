import "./Buttons.css";

const ButtonComp = (props) => {
  const { iconSrc, label, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      <img src={iconSrc} className="icon" />
      <span className="label">{label}</span>
    </button>
  );
};

export default ButtonComp;
