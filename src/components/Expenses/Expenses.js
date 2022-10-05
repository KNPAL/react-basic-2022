import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedValue, setSelectedValue] = useState();

  const selectHandler = (e) => {
    setSelectedValue(e);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedValue;
  });
  
  
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedValue}
          onFilterSelect={selectHandler}
        />
        {/* <ExpensesChart expenses={filteredExpenses}/> */}
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </>
  );
}

export default Expenses;
