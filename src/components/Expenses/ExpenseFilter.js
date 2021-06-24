import React from "react";

const ExpenseFilter = (props) => {
  const years = props.expenses.map((expense) => expense.date.getFullYear());
  const yearOptions = [...new Set(years)];

  const selectYearHandler = (e) => {
    props.onYearChange(e.target.value);
  };

  return (
    <div>
      <select value={props.selected} onChange={selectYearHandler}>
        {yearOptions.map((year) => (
          <option key={year} value={year} label={year} />
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
