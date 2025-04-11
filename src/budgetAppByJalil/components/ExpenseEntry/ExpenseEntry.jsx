import { categoryOptions } from "../CategoryOptions";
import './ExpenseEntry.css';

function ExpenseEntry({ expenseType, setExpenseType, expenseDetail, setExpenseDetail, expenseAmount, setExpenseAmount, expenses, setExpenses }) {
  // Function for adding an expense
  const handleAddExpense = () => {
    if (!expenseType || !expenseDetail || isNaN(expenseAmount) || expenseAmount <= 0) return; // Ensure valid amount

    const newExpense = {
      id: Date.now(), // Unique ID
      type: expenseType,
      amount: parseFloat(expenseAmount),
      detail: expenseDetail,
    };

    setExpenses([...expenses, newExpense]);
    setExpenseType(""); // Reset dropdown
    setExpenseDetail(""); // Reset detail input
    setExpenseAmount(""); // Reset amount input
  };

  return (
    <div className="expense-entry">
      {/* Expense drop-down */}
      <select
        value={expenseType}
        onChange={(e) => setExpenseType(e.target.value)}
      >
        {/* Map category options from CategoryOptions instead of hardcoding */}
        <option value="">Select Category</option>
        {categoryOptions.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Expense cost section */}
      <input
        type="text" 
        placeholder="Amount (PhP)"
        value={expenseAmount}
        onChange={(e) => {
          let value = e.target.value;

          // Allow empty or valid non-negative numbers
          if (/^[0-9]*\.?[0-9]*$/.test(value)) {
            setExpenseAmount(value);
          }
        }}
      />

      {/* Detail input section */}
      <input
        type="text"
        placeholder="Add detail of expenses"
        value={expenseDetail}
        onChange={(e) => setExpenseDetail(e.target.value)}
      />

      {/* Add expense button */}
      <button onClick={handleAddExpense}>Add</button>
    </div>
  );
}

export default ExpenseEntry;
