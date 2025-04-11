import { useState, useEffect } from "react";
import SetBudgetButton from "../Buttons/SetBudgetButton/SetBudgetButton.jsx";
import PieChart from '../PieChart/PieChart.jsx';
import "./CashFlow.css";

function CashFlow({
  budget,
  setBudget,
  cashOnHand,
  setCashOnHand,
  currentBalance,
  expenseTotals,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalBudget, setModalBudget] = useState(""); // Local state for the modal input

  const totalExpenses = cashOnHand - currentBalance;

  // Alert if balance is zero or negative
  useEffect(() => {
    if (currentBalance <= 0 && totalExpenses > 0) {
      alert("Running balance is low or negative. Consider setting a new budget");
    }
  }, [currentBalance, totalExpenses]);

  // Handle budget change in modal
  const handleModalBudgetChange = (event) => {
    let value = event.target.value;

    // Prevent characters like "-" or "+"
    // Only allow numbers and decimal points (no other characters allowed)
    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setModalBudget(value);
    }
  };

  // Handle setting the budget from the modal
  const handleSetBudgetFromModal = () => {
    const numericBudget = parseFloat(modalBudget);
    if (!isNaN(numericBudget) && numericBudget > 0) {
      setCashOnHand(numericBudget); 
      setBudget(modalBudget); // Set the budget
      setModalBudget(""); // Clear the input field
      setIsModalOpen(false); // Close the modal
    }
  };

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Transform expense totals into pie chart data format
  const pieData = Object.entries(expenseTotals || {}).map(([type, total]) => ({
    id: type,
    value: total,
    label: type,
  }));

  return (
    <div className="income">
      {/* Main content container to arrange components side by side */}
      <div className="content-container">
        {/* Cashflow container - containing set budget and button columns */}
        <div className="cashflow-container"> 
          <div className="title-container"><h1>Expense Tracker</h1> </div>    
          
          <div className="button-column">
            <h3>
              <span className="button-like">
                Cash Onhand:{" "}
                <span>
                {cashOnHand.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                </span>
              </span>
              <span className="button-like">
                Total Expenses:{" "}
                <span>
                  {totalExpenses.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                </span>
              </span>
              <span className="button-like">
                Running Balance:{" "}
                <span
                  className={`number ${currentBalance <= 0 && totalExpenses > 0 ? "negative-balance" : ""}`}
                >
                  {currentBalance.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}
                </span>
              </span>
            </h3>
          </div>

          <div className="set-budget-container">
            <SetBudgetButton
              setCashOnHand={setCashOnHand}
              budget={budget}
              setBudget={setBudget}
              openModal={openModal}
            />
          </div>
        </div>

        {/* PieChart container */}
        <div className="piechart-container">
          <PieChart data={pieData} />
        </div>
      </div>

      {/* Modal for setting the budget */}
      {isModalOpen && (
        <div className="set-budget-modal-overlay">
          <div className="set-budget-modal">
            <h2>Set Budget</h2>
            <input
              type="text" 
              placeholder="Enter Budget (PhP)"
              value={modalBudget}
              onChange={handleModalBudgetChange}
            />
            <div className="set-budget-modal-actions">
              <button onClick={handleSetBudgetFromModal}>Set Budget</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CashFlow;
