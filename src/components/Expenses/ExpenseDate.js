const ExpenseDate = (props) => {
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div>
      <div>{year}</div>
      <div>{day}</div>
      <div>{month}</div>
    </div>
  );
};

export default ExpenseDate;
