import "./Buttons.css";
import close from "../../assets/icons/close-button.png";

const CloseButton = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
  } = props;

  const closeModal = () => {
    setShowDeposit(false);
    setShowWithdraw(false);
    setShowSendMoney(false);
    setShowAddUser(false);
    setShowRemoveUser(false);
  };

  return (
    <div className="close-button-div">
      <img src={close} className="close-button" onClick={closeModal} />
    </div>
  );
};

export default CloseButton;
