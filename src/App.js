import ExpenseItem from "./components/Expenses/ExpenseItem";

const expenses = [
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
    id: "e2",
    title: "Sneaker",
    amount: 799,
    category: "Clothing",
    date: new Date(2021, 6, 1),
  },
];

function App() {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}

export default App;
