import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      {props.expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          category={expense.category}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
