import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <div>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div>{props.category}</div>
        <div>{props.title}</div>
        <div>{props.amount}</div>
      </Card>
    </div>
  );
};

export default ExpenseItem;
