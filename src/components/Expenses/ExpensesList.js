import "./ExpensesList.css";
import Expenseltem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <Expenseltem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </ul>
    </>
  );
};
export default ExpensesList;
