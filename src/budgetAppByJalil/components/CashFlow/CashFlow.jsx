import { useState } from "react";
import SetBudgetButton from "../Buttons/SetBudgetButton/SetBudgetButton.jsx";

function CashFlow({
  budget,
  setBudget,
  cashOnHand,
  setCashOnHand,
  currentBalance,
}) {
  const handleBudget = (event) => {
    const value = event.target.value; //Convert the input value to number
    if (value === "" || (!isNaN(value) && value > 0)) {
      //ensure value is a number and non-negative
      setBudget(value);
    }
  };

//   const handleSetBudget = () => {
//     setCashOnHand(parseFloat(budget)); // Convert to number and update cashOnHand
//     setBudget(""); // Clear the input field after setting the budget
//   };

  return (
    <div className="income">
      <input
        type="number"
        placeholder="Set amount"
        onChange={handleBudget}
        value={budget}
      />
      {/* <button onClick={handleSetBudget}>Set Budget</button> */}
      <SetBudgetButton setCashOnHand={setCashOnHand} budget={budget} setBudget={setBudget}  />
      <h3>
        <span>Cash Onhand: {cashOnHand}</span> <span>||</span>{" "}
        <span>Remaining Balance: {currentBalance.toFixed(2)}</span>
      </h3>
    </div>
  );
}

export default CashFlow;
