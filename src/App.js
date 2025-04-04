import logo from "./logo.svg";
import "./App.css";
import ExpenseTracker from "./budgetAppByJalil/components/ExpenseTracker";

function App() {
  return (
    <div className="App">
      <h1>Banking and Budget App</h1>

    {/* Budget App */}
    <ExpenseTracker />

    </div>
  );
}

export default App;
