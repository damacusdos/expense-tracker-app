import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div>
      <ExpenseDate date={props.expense.date} />
      <div>{props.expense.category}</div>
      <div>{props.expense.title}</div>
      <div>{props.expense.amount}</div>
    </div>
  );
};

export default ExpenseItem;
