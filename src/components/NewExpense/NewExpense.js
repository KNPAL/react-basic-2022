import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowFormValue] = useState(false);

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelHander();
  };

  const addNewClickHandler = () => {
    setShowFormValue(true);
  };

  const cancelHander = () => {
    setShowFormValue(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onCancelClick={cancelHander}
          onSaveExpense={saveExpenseDataHandler}
        />
      )}
      {!showForm && (
        <button onClick={addNewClickHandler} className="new-expense__actions">
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
