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
    setUserTransaction,
  } = props;

  const [selectedUser, setSelectedUser] = useState("");
  const [amount, setAmount] = useState("");

  const [isErrorShow, setShowError] = useState(false);
  const [isInvalidAmount, setAmountError] = useState(false);

  const handleSelectedUser = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);

    if (event.target.value === "") {
      setAmountError(false);
    }
  };

  const handleTransactionHistory = (newTransaction) => {
    setUserTransaction((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const withdrawMoney = (event) => {
    event.preventDefault();

    const newAmount = Number(amount);

    let isValidTransaction = false;

    if (newAmount > 0 && selectedUser) {
      const updateUsers = usersInfo.map((user) => {
        if (user.Name === selectedUser) {
          if (user.Balance >= newAmount) {
            isValidTransaction = true;
            return { ...user, Balance: user.Balance - newAmount };
          } else {
            setAmountError(true);
            setShowError(false);
          }
        }
        return user;
      });

      if (isValidTransaction) {
        const formatNumberWithCommas = (num) => {
          return Number(num).toLocaleString();
        };

        const newTranHistory = {
          Type: "Withdraw",
          Amount: `-${formatNumberWithCommas(amount)}`,
          Sender: selectedUser,
          Recipient: "n/a",
          Date: new Date().toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        };

        handleTransactionHistory(newTranHistory);

        setUsersInfo(updateUsers);
        setAmount("");
        setShowWithdraw(false);
      }
    } else {
      setShowError(true);
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

        {isErrorShow && (
          <div className="withdraw-error">
            <p>SELECT USER</p>
          </div>
        )}

        {isInvalidAmount && (
          <div className="withdraw-amount-error">
            <p>INVALID AMOUNT</p>
          </div>
        )}

        <div className="withdraw-button">
          <ButtonComp iconSrc={withdraw} label="Withdraw" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Withdraw;
