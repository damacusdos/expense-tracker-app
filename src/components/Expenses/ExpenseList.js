import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  return (
    <div className={styles["list-container"]}>
      <div className={styles["list-header"]}>
        <span>Date</span>
        <span>Category</span>
        <span>Title</span>
        <span>Amount</span>
      </div>
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
