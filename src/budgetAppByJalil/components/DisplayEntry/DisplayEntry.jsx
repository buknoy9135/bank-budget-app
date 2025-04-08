import DeleteButton from "../Buttons/DeleteButton/DeleteButton.jsx";
import EditButton from "../Buttons/EditButton/EditButton.jsx";

function DisplayEntry({expenses, setExpenses}) {
        
    return (
        <div className="expense-list">
            <h2>Expense List:</h2>
            <ul style={{listStyleType: "none"}}>
            {expenses.map((exp) => (
                <li key={exp.id}>
                <strong>{exp.type}:</strong> {exp.amount.toFixed(2)} ({exp.detail}) - Running Balance: {exp.remainingBalance}
                {/* Editg Button */}
                <EditButton expense={exp} setExpenses={setExpenses} />
                {/* Delete Button */}
                <DeleteButton id={exp.id} onDelete={setExpenses} />                               
                </li>
            ))}
            </ul>
        </div>
    )
}

export default DisplayEntry;