import { useState } from 'react';

function ExpenseTracker() {
  const header = "Expense Tracker";
  const totalExpenses = 50;

  const [budget, setBudget] = useState('');
  const [cashOnHand, setCashOnHand] = useState(0);

  const handleBudget = (event) => {
    setBudget(event.target.value);
  }

  const handleSetBudget = () => {
    setCashOnHand(Number(budget)); // Convert to number and update cashOnHand 
    setBudget(''); // Clear the input field after setting the budget
  }

  const cashRemaining = cashOnHand - totalExpenses;

  return (
    <div className="App">
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
          <span>Cash Onhand: {cashOnHand}</span>  <span>||</span> <span>Cash Remaining: {cashRemaining}</span>
        </h3> 
      </div>

      {/* container for overview of expenses categorized */}
      {/* <div className="overview">
        
      </div> */}
    </div>
  );
}

export default ExpenseTracker;
