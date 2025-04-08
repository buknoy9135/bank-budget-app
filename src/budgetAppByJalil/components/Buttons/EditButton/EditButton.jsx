import { useState } from "react";
import { categoryOptions } from "../../CategoryOptions";

function EditButton({ expense, setExpenses }) {
    //holds edit data values and function, and setup initial state
    const [isEditing, setIsEditing] = useState(false); //true when editing
    const [editData, setEditData] = useState({
        type: expense.type,
        amount: expense.amount,
        detail: expense.detail
    })

    //Handle input changes (for type, amount, detail)
    const handleChange = (e) => {
        const { name, value } = e.target;

        //If the field is 'amount', check if it is a valid non-negative number
        if (name === "amount") {
            const numValue = parseFloat(value);
            //allow empty string or non-negative numbers
            if (value === "" || (numValue >= 0 && !isNaN(numValue))) {
                setEditData((prev) => ({...prev, [name]: value}));
            }
        } else {
            // for other fields, type, detail) it will update normally
            setEditData((prev) => ({...prev, [name]: value}));
        }        
    };

    //Save the updated expense
    const handleSave = () => {
        setExpenses((prev) =>
            prev.map((exp) =>
                exp.id === expense.id
                    ? { ...exp, ...editData, amount: parseFloat(editData.amount) }
                    : exp
            )
        );
        setIsEditing(false);
    }

    //Cancel and reset the form to initial values
    const handleCancel = () => {
        setEditData({ type: expense.type, amount: expense.amount, detail: expense.detail});
        setIsEditing(false);
    }

    return(
        <>
            {isEditing ? (
                <div className="edit-form">
                    <select name="type" value={editData.type} onChange={handleChange}>
                        {categoryOptions.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <input 
                        type="number"
                        name="amount"
                        value={editData.amount}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        name="detail"
                        value={editData.detail}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}    
        </>
    )
}

export default EditButton;