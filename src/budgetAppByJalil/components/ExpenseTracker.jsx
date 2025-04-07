import { useState } from "react";

function ExpenseTracker() {
  const header = "Expense Tracker";

  //useState for cash incoming
  const [budget, setBudget] = useState("");
  const [cashOnHand, setCashOnHand] = useState(0);

  //useState for expenses
  const [expenseType, setExpenseType] = useState("");
  const [expenseDetail, setExpenseDetail] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  // const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);

  //------------------------------------------------------------

  //function for cash incoming
  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  const handleSetBudget = () => {
    setCashOnHand(Number(budget)); // Convert to number and update cashOnHand
    setBudget(""); // Clear the input field after setting the budget
  };

  //------------------------------------------------------------

  //function for adding an expense
  const handleAddExpense = () => {
    if (!expenseType || !expenseDetail) return;

    const newExpense = {
      id: Date.now(), //unique ID
      type: expenseType,
      amount: Number(expenseAmount),
      detail: expenseDetail,
    };

    setExpenses([...expenses, newExpense]);
    setExpenseType(""); //resets dropdown
    setExpenseDetail(""); //resets detail input
    setExpenseAmount(""); //resets amount input
  };

  //-------------------------------------------------------------

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
      <div className="income">
        <input
          type="number"
          placeholder="Set amount"
          onChange={handleBudget}
          value={budget}
        />
        <button onClick={handleSetBudget}>Set Budget</button>
        <h3>
          <span>Cash Onhand: {cashOnHand}</span> <span>||</span>{" "}
          <span>Remaining Balance: {currentBalance.toFixed(2)}</span>
        </h3>
      </div>

      {/* -------------------------------------------------------------------------------- */}

      {/* expense entry container*/}
      <div className="expense-entry">
        {/* expense drop-down */}
        <select
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>

        {/* expense cost section */}
        <input
          type="text"
          placeholder="amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />

        {/* detail input section */}
        <input
          type="text"
          placeholder="add detail of expenses"
          value={expenseDetail}
          onChange={(e) => setExpenseDetail(e.target.value)}
        />

        {/* Add expense button */}
        <button onClick={handleAddExpense}>Add</button>
      </div>

      {/* ----------------------------------------------------------------------- */}

      {/* Displaying expense list */}
      <div className="expense-list">
        <h3>Expense List:</h3>
        <ul style={{listStyleType: "none"}}>
          {expensesWithBalance.map((exp) => (
            <li key={exp.id}>
              <strong>{exp.type}:</strong> {exp.amount.toFixed(2)} ({exp.detail}
              ) - Current Balance: {exp.remainingBalance}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseTracker;
