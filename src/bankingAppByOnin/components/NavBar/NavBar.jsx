import "./NavBar.css";

const NavBar = (props) => {
  const { setShowUserInfo } = props;

  const handleUserInfo = () => {
    setShowUserInfo((prev) => !prev);
  };

  return (
    <div className="nav-bar">
      <p className="nav-title">AvionBank</p>
      <p className="emp-info" onClick={handleUserInfo}>
        EMPLOYEE INFO
      </p>
    </div>
  );
};

export default NavBar;
