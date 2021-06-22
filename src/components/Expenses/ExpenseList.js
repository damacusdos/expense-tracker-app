import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  return (
    <div className={styles["list-container"]}>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
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
