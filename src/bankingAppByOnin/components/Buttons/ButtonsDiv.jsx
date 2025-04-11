import "./Buttons.css";
import ButtonComp from "../Buttons/ButtonComp";
import deposit from "../../assets/icons/deposit.png";
import withdraw from "../../assets/icons/withdraw.png";
import send from "../../assets/icons/send.png";
import addUser from "../../assets/icons/add-user.png";
import removeUser from "../../assets/icons/remove-user.png";

const ButtonsDiv = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
  } = props;

  const showDeposit = () => {
    setShowDeposit(true);
  };

  const showWithdraw = () => {
    setShowWithdraw(true);
  };

  const showSendMoney = () => {
    setShowSendMoney(true);
  };

  const showAddUser = () => {
    setShowAddUser(true);
  };

  const showRemoveUser = () => {
    setShowRemoveUser(true);
  };

  return (
    <div className="buttons-div">
      <ButtonComp iconSrc={deposit} label="Deposit" onClick={showDeposit} />
      <ButtonComp iconSrc={withdraw} label="Withdraw" onClick={showWithdraw} />
      <ButtonComp iconSrc={send} label="Send Money" onClick={showSendMoney} />
      <ButtonComp iconSrc={addUser} label="Add User" onClick={showAddUser} />
      <ButtonComp
        iconSrc={removeUser}
        label="Remove User"
        onClick={showRemoveUser}
      />
    </div>
  );
};

export default ButtonsDiv;
