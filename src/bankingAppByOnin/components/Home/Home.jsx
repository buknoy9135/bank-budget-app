import { use, useState } from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import UserTable from "../UserTable/UserTable";
import TransactionHistory from "../TransactionHistory/Table";
import userData from "../../assets/UserInfo.json";
import transactionData from "../../assets/TransactionHistory.json";
import ButtonsDiv from "../Buttons/ButtonsDiv";
import BudgetTrackerButton from "../Buttons/BudgetTrackerButton";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";
import SendMoney from "../SendMoney/SendMoney";
import AddUser from "../AddUser/AddUser";
import RemoveUser from "../RemoveUser/RemoveUser";
import LogIn from "../LogInPage/LogIn";
import ButtonComp from "../Buttons/ButtonComp";
import addUser from "../../assets/icons/add-user.png";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

const userHeaders = ["Name", "Email", "Balance (Php)", "Handled By"];
const transactionHeaders = [
  "Type",
  "Amount (Php)",
  "Sender",
  "Recipient",
  "Date",
];

const Home = () => {
  const [isDepositShow, setShowDeposit] = useState(false);
  const [isWithdrawShow, setShowWithdraw] = useState(false);
  const [isSendMoneyShow, setShowSendMoney] = useState(false);
  const [isAddUserShow, setShowAddUser] = useState(false);
  const [isRemoveUserShow, setShowRemoveUser] = useState(false);

  const [usersInfo, setUsersInfo] = useState(userData);
  const [userTransaction, setUserTransaction] = useState(transactionData);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isUserInfoShow, setShowUserInfo] = useState(false);

  const showAddUser = () => {
    setShowAddUser(true);
  };

  return (
    <div className="home-div">
      <NavBar setShowUserInfo={setShowUserInfo} />

      <h1 className="header">BANK ADMIN DASHBOARD</h1>

      <h1 className="user-info-text">User Information:</h1>

      {usersInfo.length === 0 && (
        <div className="no-user-div">
          <h1 className="no-user">NO USER TO SHOW</h1>
          <ButtonComp
            iconSrc={addUser}
            label="Add User"
            onClick={showAddUser}
          />
        </div>
      )}

      {usersInfo.length > 0 && (
        <UserTable data={usersInfo} headers={userHeaders} />
      )}

      {usersInfo.length > 0 && (
        <ButtonsDiv
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
        />
      )}

      <BudgetTrackerButton />

      <h1 className="history">Transaction History:</h1>
      {userTransaction.length === 0 && (
        <div className="no-history-div">
          <h1 className="no-history">NO HISTORY TO SHOW</h1>
        </div>
      )}

      {userTransaction.length > 0 && (
        <TransactionHistory
          data={userTransaction}
          headers={transactionHeaders}
        />
      )}

      {isDepositShow && (
        <Deposit
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
          setUsersInfo={setUsersInfo}
          usersInfo={usersInfo}
          setUserTransaction={setUserTransaction}
        />
      )}

      {isWithdrawShow && (
        <Withdraw
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
          setUsersInfo={setUsersInfo}
          usersInfo={usersInfo}
          setUserTransaction={setUserTransaction}
        />
      )}

      {isSendMoneyShow && (
        <SendMoney
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
          setUsersInfo={setUsersInfo}
          usersInfo={usersInfo}
          setUserTransaction={setUserTransaction}
        />
      )}

      {isAddUserShow && (
        <AddUser
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
          setUsersInfo={setUsersInfo}
          usersInfo={usersInfo}
        />
      )}

      {isRemoveUserShow && (
        <RemoveUser
          setShowDeposit={setShowDeposit}
          setShowWithdraw={setShowWithdraw}
          setShowSendMoney={setShowSendMoney}
          setShowAddUser={setShowAddUser}
          setShowRemoveUser={setShowRemoveUser}
          setUsersInfo={setUsersInfo}
          usersInfo={usersInfo}
        />
      )}

      {!isLoggedIn && <LogIn setIsLoggedIn={setIsLoggedIn} />}

      {isUserInfoShow && <EmployeeInfo />}
    </div>
  );
};

export default Home;
