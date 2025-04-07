import logo from "./logo.svg";
import "./App.css";
import ExpenseTracker from "./budgetAppByJalil/components/ExpenseTracker.jsx";
import Test from './budgetAppByJalil/components/Test'

function App() {
  return (
    <div className="App">
      <h1>Banking and Budget App</h1>

    {/* Budget App */}
    <ExpenseTracker />
    {/* <Test /> */}

    </div>
  );
}

export default App;
