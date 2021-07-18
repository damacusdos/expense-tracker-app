import React, { useState } from "react";
import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [typedAmount, setTypedAmount] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [typedCategory, setTypedCategory] = useState("");
  const [typedDate, setTypedDate] = useState("");

  function amountChangeHandler(e) {
    console.log(e.target.value);
    setTypedAmount(e.target.value);
  }

  function titleChangeHandler(e) {
    setTypedTitle(e.target.value);
  }

  function categoryChangeHandler(e) {
    setTypedCategory(e.target.value);
  }

  function dateChangeHandler(e) {
    console.log(e.target.value);
    setTypedDate(e.target.value);
  }

  function addExpense(e) {
    e.preventDefault();

    const data = {
      title: typedTitle,
      amount: typedAmount,
      category: typedCategory,
      date: new Date(typedDate),
    };

    // console.log(data);
    props.addExpenseHandler(data);
    setTypedTitle("");
    setTypedAmount("");
    setTypedCategory("");
    setTypedDate("");
  }

  return (
    <form className={style["expense-form"]} onSubmit={addExpense}>
      <div className={style["form-input"]}>
        <label>Amount</label>
        <input
          type="number"
          value={typedAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className={style["form-input"]}>
        <label>Title</label>
        <input type="text" value={typedTitle} onChange={titleChangeHandler} />
      </div>
      <div className={style["form-input"]}>
        <label>Category</label>
        <input
          type="text"
          value={typedCategory}
          onChange={categoryChangeHandler}
        />
      </div>
      <div className={style["form-input"]}>
        <label>Date</label>
        <input type="date" value={typedDate} onChange={dateChangeHandler} />
      </div>
      <button>Add</button>
    </form>
  );
};

export default ExpenseForm;
