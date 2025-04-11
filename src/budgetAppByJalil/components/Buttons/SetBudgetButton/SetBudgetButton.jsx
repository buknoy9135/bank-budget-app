import './SetBudgetButton.css';

function SetBudgetButton({ openModal }) {
  return (
    <button className="SetBudgetButton" onClick={openModal}>
      Set Budget
    </button>
  );
}

export default SetBudgetButton;
