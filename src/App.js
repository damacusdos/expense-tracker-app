import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const defaultExpenses = [
  {
    id: "e1",
    title: "Lunch",
    amount: 200,
    category: "Food",
    date: new Date(2021, 6, 11),
  },
  {
    id: "e2",
    title: "Shampoo",
    amount: 159,
    category: "Cosmetic",
    date: new Date(2021, 6, 3),
  },
  {
    id: "e3",
    title: "Cleaning Stuff",
    amount: 362,
    category: "Home",
    date: new Date(2021, 6, 1),
  },
  {
    id: "e4",
    title: "Sneaker",
    amount: 799,
    category: "Clothing",
    date: new Date(2021, 6, 1),
  },
];

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addNewExpense = (data) => {
    setExpenses((prevExpense) => {
      return [data, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
