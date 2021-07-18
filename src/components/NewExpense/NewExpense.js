import React from "react";
import ExpenseForm from "./ExpenseForm";
import style from "./NewExpense.module.css";

const NewExpense = (props) => {
  const addExpenseHandler = (data) => {
    const expenseInfo = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseInfo);
  };

  return (
    <div className={style["form-container"]}>
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
