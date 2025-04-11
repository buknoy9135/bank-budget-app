import "./SendMoney.css";
import { useState } from "react";
import ButtonComp from "../Buttons/ButtonComp";
import send from "../../assets/icons/send.png";
import CloseButton from "../Buttons/CloseButton";

const SendMoney = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
    setUsersInfo,
    usersInfo,
  } = props;

  const [amount, setAmount] = useState("");

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleSelectedSender = (event) => {
    setSender(event.target.value);
  };

  const handleSelectedReceiver = (event) => {
    setReceiver(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const sendMoney = (event) => {
    event.preventDefault();

    const newAmount = Number(amount);

    if (newAmount > 0 && sender && receiver && sender !== receiver) {
      const senderInfo = usersInfo.find((user) => user.Name === sender);

      if (senderInfo.Balance >= newAmount) {
        const updateUsers = usersInfo.map((user) => {
          if (user.Name === sender) {
            return { ...user, Balance: user.Balance - newAmount };
          } else if (user.Name === receiver) {
            return { ...user, Balance: user.Balance + newAmount };
          }

          return user;
        });

        setUsersInfo(updateUsers);
        setAmount("");
        setSender("");
        setReceiver("");
        setShowSendMoney(false);
      }
    }
  };

  return (
    <div className="send-div">
      <form className="send-form" onSubmit={sendMoney}>
        <CloseButton
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
        />

        <h3 className="send-header">SEND MONEY</h3>

        <label className="select-user-label">Select Sender:</label>

        <div className="dropdown-div">
          <select value={sender} onChange={handleSelectedSender} required>
            <option>Select Sender:</option>
            {usersInfo.map((user, index) => (
              <option key={index} value={user.Name}>
                {user.Name}
              </option>
            ))}
          </select>
        </div>

        <label className="select-user-label">Select Receiver:</label>

        <div className="dropdown-div">
          <select value={receiver} onChange={handleSelectedReceiver} required>
            <option>Select Receiver:</option>
            {usersInfo.map((user, index) => (
              <option key={index} value={user.Name}>
                {user.Name}
              </option>
            ))}
          </select>
        </div>

        <label className="amount-label">Amount:</label>

        <input
          type="number"
          className="amount-input"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          min="0"
          step="0.01"
          required
        />

        <div className="send-button">
          <ButtonComp iconSrc={send} label="Send" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
