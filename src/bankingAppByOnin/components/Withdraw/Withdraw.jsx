import "./Withdraw.css";
import { useState } from "react";
import ButtonComp from "../Buttons/ButtonComp";
import withdraw from "../../assets/icons/withdraw.png";
import CloseButton from "../Buttons/CloseButton";

const Withdraw = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
    setUsersInfo,
    usersInfo,
  } = props;
  const [selectedUser, setSelectedUser] = useState("");
  const [amount, setAmount] = useState("");

  const handleSelectedUser = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const withdrawMoney = (event) => {
    event.preventDefault();

    const newAmount = Number(amount);

    if (newAmount > 0 && selectedUser) {
      const updateUsers = usersInfo.map((user) => {
        if (user.Balance > newAmount) {
          if (user.Name === selectedUser) {
            return { ...user, Balance: user.Balance - newAmount };
          }
          return user;
        }

        return user;
      });

      console.log(updateUsers);

      setUsersInfo(updateUsers);
      setAmount("");
      setShowWithdraw(false);
    }
  };

  return (
    <div className="withdraw-div">
      <form className="withdraw-form" onSubmit={withdrawMoney}>
        <CloseButton
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
        />

        <h3 className="withdraw-header">WITHDRAW</h3>

        <label className="select-user-label">Select User:</label>

        <div className="dropdown-div">
          <select value={selectedUser} onChange={handleSelectedUser} required>
            <option>Select User:</option>
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

        <div className="deposit-button">
          <ButtonComp iconSrc={withdraw} label="Withdraw" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Withdraw;
