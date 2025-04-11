import { useState } from "react";
import { categoryOptions } from "../../CategoryOptions";

function EditButton({ expense, setExpenses }) {
  const [isEditing, setIsEditing] = useState(false); // true when editing
  const [editData, setEditData] = useState({
    type: expense.type,
    amount: expense.amount,
    detail: expense.detail
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {
      // Allow only valid numeric input (positive numbers or decimals)
      if (/^[0-9]*\.?[0-9]*$/.test(value) || value === "") {
        setEditData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    if (!editData.type || !editData.detail || isNaN(editData.amount) || parseFloat(editData.amount) <= 0) {
      return; // Ensure all fields are valid
    }

    setExpenses((prev) =>
      prev.map((exp) =>
        exp.id === expense.id
          ? { ...exp, ...editData, amount: parseFloat(editData.amount) }
          : exp
      )
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ type: expense.type, amount: expense.amount, detail: expense.detail });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="modal-overlay">
          <div className="modal">
            {/* Select category */}
            <select name="type" value={editData.type} onChange={handleChange}>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Amount input */}
            <input
              type="text"
              name="amount"
              value={editData.amount}
              onChange={handleChange}
              placeholder="Amount"
            />

            {/* Detail input */}
            <input
              type="text"
              name="detail"
              value={editData.detail}
              onChange={handleChange}
              placeholder="Detail"
            />

            {/* Save and Cancel buttons */}
            <div class="modal-actions">
              <button className="save" onClick={handleSave}>Save</button>
              <button className="cancel" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </>
  );
}

export default EditButton;
