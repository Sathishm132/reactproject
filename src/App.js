import ExpenseItems from "./component/ExpenseItems";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      place:"america",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,place:"vellore"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      place:"india"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      place:"tamilnadu",
    },
  ];
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems title={expenses[0].title}
      amount={expenses[0].amount}
      Date={expenses[0].date}
      place={expenses[0].place}></ExpenseItems>
      <ExpenseItems title={expenses[1].title}
      amount={expenses[1].amount}
      Date={expenses[1].date}
      place={expenses[1].place}></ExpenseItems>
       <ExpenseItems title={expenses[2].title}
      amount={expenses[2].amount}
      Date={expenses[2].date}
      place={expenses[2].place}></ExpenseItems>
       <ExpenseItems title={expenses[3].title}
      amount={expenses[3].amount}
      Date={expenses[3].date}
      place={expenses[3].place}></ExpenseItems>
      
      
      
      
      {/* <ExpenseItems .
      title={expenses[0].title}
       amount={expenses[0].amount} 
       date={expenses[0].date} 
       ></ExpenseItems> */}
       
      
      
      
    </div>
  );
}

export default App;
