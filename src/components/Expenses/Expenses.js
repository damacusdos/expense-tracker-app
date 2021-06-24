import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log(props.expenses);
  const filteredItems = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <ExpenseFilter
        expenses={props.expenses}
        selected={filteredYear}
        onYearChange={filterChangeHandler}
      />
      <ExpenseList expenses={filteredItems} />
    </div>
  );
};

export default Expenses;
