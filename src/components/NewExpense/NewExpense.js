import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const addExpenseHandler = (data) => {
    const expenseInfo = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseInfo);
  };

  return (
    <div>
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
