import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseList expenses={props.expenses} />
    </div>
  );
};

export default Expenses;
