import { useEffect } from 'react';
import DeleteButton from "../Buttons/DeleteButton/DeleteButton.jsx";
import EditButton from "../Buttons/EditButton/EditButton.jsx";
import './DisplayEntry.css';

function DisplayEntry({ expenses, setExpenses, onExpenseTotalsChange }) {
    // Calculate expense totals by type whenever expenses change
    useEffect(() => {
        const totals = expenses.reduce((acc, exp) => {
            acc[exp.type] = (acc[exp.type] || 0) + exp.amount;
            return acc;
        }, {});
        onExpenseTotalsChange(totals);
    }, [expenses, onExpenseTotalsChange]);

    return (
        <div className="expense-list">
            {/* <h2>Expense List:</h2> */}
            <div className="entries-container">
                {expenses.length > 0 && (
                    <div className="table-header">
                        <span>Type</span>
                        <span>Amount</span>
                        <span>Details</span>
                        <span>Balance</span>
                        <span>Actions</span>
                    </div>
                )}
                <ul className="table-body">
                    {expenses.map((exp) => {
                        // Ensure `remainingBalance` is a number before formatting
                        const formattedRemainingBalance = Number(exp.remainingBalance).toLocaleString('en-PH', { style: 'currency', currency: 'PHP'
                        });

                        return (
                            <li className="table-row" key={exp.id}>
                                <span>{exp.type}</span>
                                <span>
                                    {exp.amount.toLocaleString('en-PH', { style: 'currency', currency: 'PHP'
                                    })}
                                </span>
                                <span>{exp.detail}</span>
                                <span>{formattedRemainingBalance}</span>
                                <span className="button-group">
                                    <EditButton expense={exp} setExpenses={setExpenses} />
                                    <DeleteButton id={exp.id} onDelete={setExpenses} />
                                </span>
                            </li>
                        );
                    })}
                </ul>                    
            </div>
        </div>
    );
}

export default DisplayEntry;
