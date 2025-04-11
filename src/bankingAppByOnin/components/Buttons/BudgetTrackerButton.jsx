import { useState } from "react";
import "./Buttons.css";
import budget from "../../assets/icons/budget.png";

const BudgetTrackerButton = () => {
  const [trackerShows, showTracker] = useState(false);

  const showBudgetTracker = () => {
    showTracker(true);

    console.log("Budget Tracker Showing");
    console.log(trackerShows);
  };

  return (
    <div className="budget-button-div">
      <button className="budget-button" onClick={showBudgetTracker}>
        <img src={budget} className="budget-icon" />
        <span className="label">Budget Tracker</span>
      </button>
    </div>
  );
};

export default BudgetTrackerButton;
