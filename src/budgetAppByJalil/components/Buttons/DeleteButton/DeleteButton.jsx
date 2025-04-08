function DeleteButton({id, onDelete}) {
    const handleDeleteExpense = (id) => {
        onDelete((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id))
    }
    return(
        <button onClick={() => handleDeleteExpense(id)}>Delete</button>
    )
}
export default DeleteButton;