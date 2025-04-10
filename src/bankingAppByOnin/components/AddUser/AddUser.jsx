import "./AddUser.css";
import { useState } from "react";
import ButtonComp from "../Buttons/ButtonComp";
import add from "../../assets/icons/add-user.png";
import CloseButton from "../Buttons/CloseButton";

const AddUser = (props) => {
  const {
    setShowDeposit,
    setShowWithdraw,
    setShowSendMoney,
    setShowAddUser,
    setShowRemoveUser,
    setUsersInfo,
  } = props;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddUser = (event) => {
    setUserName(event.target.value);
  };

  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSetAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleNewUser = (newUser) => {
    setUsersInfo((prevUsers) => [...prevUsers, newUser]);
  };

  const addNewUser = (event) => {
    event.preventDefault();

    const formatNumberWithCommas = (num) => {
      return parseFloat(num.toLocaleString());
    };

    const newUser = {
      Name: userName,
      Email: email,
      Password: password,
      Balance: formatNumberWithCommas(amount),
      Handled_by: "Onin",
      Id: crypto.randomUUID(),
    };

    handleNewUser(newUser);
    setUserName("");
    setEmail("");
    setPassword("");
    setAmount("");
    setShowAddUser(false);
  };

  return (
    <div className="add-user-div">
      <form className="add-user-form" onSubmit={addNewUser}>
        <CloseButton
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
        />

        <h3 className="add-user-header">ADD USER</h3>

        <label className="add-user-label">NAME:</label>

        <input
          type="text"
          className="add-user-input"
          id="name"
          value={userName}
          onChange={handleAddUser}
          placeholder="Enter name"
          required
        />

        <label className="add-user-label">EMAIL:</label>

        <input
          type="email"
          className="add-user-input"
          id="email"
          value={email}
          onChange={handleSetEmail}
          placeholder="Enter email"
          required
        />

        <label className="add-user-label">PASSWORD:</label>

        <input
          type="password"
          className="add-user-input"
          id="password"
          value={password}
          onChange={handleSetPassword}
          placeholder="Enter password"
          required
        />

        <label className="add-user-label">DEPOSIT AMOUNT:</label>

        <input
          type="number"
          className="amount-input"
          id="amount"
          value={amount}
          onChange={handleSetAmount}
          placeholder="Enter amount"
          required
        />

        <div className="add-button">
          <ButtonComp iconSrc={add} label="Add User" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
