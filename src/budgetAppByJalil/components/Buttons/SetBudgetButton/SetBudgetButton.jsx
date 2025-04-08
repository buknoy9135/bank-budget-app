

function SetBudgetButton({setCashOnHand, budget, setBudget}) {
    const handleSetBudget = () => {
        setCashOnHand(parseFloat(budget)); // Convert to number and update cashOnHand
        setBudget(""); // Clear the input field after setting the budget
      };
    return (
        <button onClick={handleSetBudget}>Set Budget</button>
    )
}

export default SetBudgetButton;