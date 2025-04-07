import { useState } from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import UserTable from "../UserTable/UserTable";
import TransactionHistory from "../TransactionHistory/Table";
import userData from "../../assets/UserInfo.json";
import transactionData from "../../assets/TransactionHistory.json";
import ButtonsDiv from "../Buttons/ButtonsDiv";
import BudgetTrackerButton from "../Buttons/BudgetTrackerButton";

const userHeaders = ["Name", "Email", "Balance (Php)", "Handled By"];
const transactionHeaders = [
  "Type",
  "Amount (Php)",
  "Sender",
  "Recipient",
  "Date",
];

function Home() {
  const [employee, setEmployeeName] = useState("Onin");

  return (
    <div className="home-div">
      <NavBar />

      <h1 className="welcome">Welcome, {employee}!</h1>

      <h1 className="user-info-text">User Information:</h1>

      <UserTable data={userData} headers={userHeaders} />

      <ButtonsDiv />

      <BudgetTrackerButton />

      <h1 className="history">Transaction History</h1>
      <TransactionHistory data={transactionData} headers={transactionHeaders} />
    </div>
  );
}

export default Home;
