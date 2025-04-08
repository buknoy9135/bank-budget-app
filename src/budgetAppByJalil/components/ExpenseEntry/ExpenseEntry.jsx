import { categoryOptions } from "../CategoryOptions";

function ExpenseEntry({expenseType, setExpenseType, expenseDetail, setExpenseDetail, expenseAmount, setExpenseAmount, expenses, setExpenses}){

    //function for adding an expense
    const handleAddExpense = () => {
        if (!expenseType || !expenseDetail) return; //ensure amount is not empty

    const newExpense = {
      id: Date.now(), //unique ID
      type: expenseType,
      amount: parseFloat(expenseAmount),
      detail: expenseDetail,
    };

    setExpenses([...expenses, newExpense]);
    setExpenseType(""); //resets dropdown
    setExpenseDetail(""); //resets detail input
    setExpenseAmount(""); //resets amount input
  };
    return(
        <div className="expense-entry">
        {/* expense drop-down */}
        <select
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
        >
        
        {/* map category options from CategoryOptions instead of hardcoding */}
          <option value="">Select Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
                {category}
            </option>
          ))}
        </select>

        {/* expense cost section */}
        <input
          type="number"
          placeholder="amount"
          value={expenseAmount}
          onChange={(e) => {
            const value = e.target.value;

            // Allow empty or non-negative numbers only
            if (value === "" || (value >= 0 && !isNaN(value))) {
                setExpenseAmount(value);
            }
        }}

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
    )
}

export default ExpenseEntry;