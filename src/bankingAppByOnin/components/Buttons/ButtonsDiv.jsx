import "./Buttons.css";
import ButtonComp from "../Buttons/ButtonComp";
import deposit from "../../assets/icons/deposit.png";
import withdraw from "../../assets/icons/withdraw.png";
import send from "../../assets/icons/send.png";
import addUser from "../../assets/icons/add-user.png";
import removeUser from "../../assets/icons/remove-user.png";

function ButtonsDiv() {
  function handleDeposit() {
    console.log("Deposit");
  }

  return (
    <div className="buttons-div">
      <ButtonComp iconSrc={deposit} label="Deposit" onClick={handleDeposit} />
      <ButtonComp iconSrc={withdraw} label="Withdraw" onClick={handleDeposit} />
      <ButtonComp iconSrc={send} label="Send Money" onClick={handleDeposit} />
      <ButtonComp iconSrc={addUser} label="Add User" onClick={handleDeposit} />
      <ButtonComp
        iconSrc={removeUser}
        label="Remove User"
        onClick={handleDeposit}
      />
    </div>
  );
}

export default ButtonsDiv;
