import "./Deposit.css";
import { useState } from "react";
import ButtonComp from "../Buttons/ButtonComp";
import deposit from "../../assets/icons/deposit.png";
import CloseButton from "../Buttons/CloseButton";

const Deposit = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
    usersInfo,
    setUsersInfo,
    setUserTransaction,
  } = props;

  const [selectedUser, setSelectedUser] = useState("");
  const [amount, setAmount] = useState("");

  const [isErrorShow, setShowError] = useState(false);

  const handleSelectedUser = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransactionHistory = (newTransaction) => {
    setUserTransaction((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const depositMoney = (event) => {
    event.preventDefault();

    const newAmount = Number(amount);

    if (newAmount > 0 && selectedUser) {
      const updateUsers = usersInfo.map((user) => {
        if (user.Name === selectedUser) {
          return { ...user, Balance: user.Balance + newAmount };
        }

        return user;
      });

      console.log(updateUsers);

      const formatNumberWithCommas = (num) => {
        return Number(num).toLocaleString();
      };

      const newTranHistory = {
        Type: "Deposit",
        Amount: formatNumberWithCommas(amount),
        Sender: "n/a",
        Recipient: selectedUser,
        Date: new Date().toLocaleString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      setUsersInfo(updateUsers);
      setAmount("");
      setShowDeposit(false);
      handleTransactionHistory(newTranHistory);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="deposit-div">
      <form className="deposit-form" onSubmit={depositMoney}>
        <CloseButton
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
        />

        <h3 className="deposit-header">DEPOSIT</h3>

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

        <div className="deposit-error">{isErrorShow && <p>SELECT USER</p>}</div>

        <div className="deposit-button">
          <ButtonComp iconSrc={deposit} label="Deposit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Deposit;
