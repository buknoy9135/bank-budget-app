import { useState } from "react";
import "./Buttons.css";
import budget from "../../assets/icons/budget.png";
import ExpenseTracker from '../../../budgetAppByJalil/components/Main/ExpenseTracker';

const BudgetTrackerButton = () => {
  const [trackerShows, showTracker] = useState(false);

  const showBudgetTracker = () => {
    showTracker(true);

    console.log("Budget Tracker Showing");
    console.log(trackerShows);
  };

  const closeBudgetTracker = () => {
    showTracker(false);
  }

  return (
    <div className="budget-button-div">
      <button className="budget-button" onClick={showBudgetTracker}>
        <img src={budget} className="budget-icon" />
        <span className="label">Budget Tracker</span>
      </button>

      {trackerShows && (
        <div className="modal-backdrop">
            <ExpenseTracker closeTracker={closeBudgetTracker} />
        </div>
      )}
    </div>
  );
};

export default BudgetTrackerButton;
