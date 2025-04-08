import { useState } from "react";
import CashFlow from "../CashFlow/CashFlow.jsx";
import ExpenseEntry from "../ExpenseEntry/ExpenseEntry.jsx";
import DisplayEntry from "../DisplayEntry/DisplayEntry.jsx";

function ExpenseTracker() {
  const header = "Expense Tracker";

  //useState for cash incoming
  const [budget, setBudget] = useState("");
  const [cashOnHand, setCashOnHand] = useState(0);

  //useState for expenses
  const [expenseType, setExpenseType] = useState("");
  const [expenseDetail, setExpenseDetail] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  //------------------------------------------------------------

  //Calculate the remaining balance after each expense
  let currentBalance = cashOnHand;

  const expensesWithBalance = expenses.map((exp) => {
    currentBalance -= exp.amount; //subtract each expense amount from the balance
    return {
      ...exp,
      remainingBalance: currentBalance.toFixed(2), //store the balance after each expense
    };
  });

  return (
    <div className="Budget-App">
      <h1>{header}</h1>

      {/* container for cash onhand and cash remaining */}
      <CashFlow
        budget={budget}
        setBudget={setBudget}
        cashOnHand={cashOnHand}
        setCashOnHand={setCashOnHand}
        currentBalance={currentBalance}
      />

      {/* expense entry container*/}
      <ExpenseEntry
        expenseType={expenseType}
        setExpenseType={setExpenseType}
        expenseDetail={expenseDetail}
        setExpenseDetail={setExpenseDetail}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        expenses={expenses}
        setExpenses={setExpenses}
      />

      {/* Displaying expense list */}
      <DisplayEntry expenses={expensesWithBalance} setExpenses={setExpenses} />
    </div>
  );
}

export default ExpenseTracker;
