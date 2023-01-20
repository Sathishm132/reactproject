import React,{useState} from "react";
import ExpenseItems from "./component/expenses/ExpenseItems";
import './component/expenses/ExpenseItem.css';
import Card from "./component/uI/Card";
import './component/expenses/expense.css'
import NewExpense from "./component/EventExpense/NewExpenses";
import Expense from "./component/expenses/Expense";
import Filter from "./component/expenses/FilterComponent";


const Dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 11, 14),
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
const App=()=> {
 
  const[espense,setExpense]=useState(Dummy)
  const add=expense=>{
   
    
    setExpense((previousExpense)=>{

      return([expense,...previousExpense])
      

    })
    
    
    

  }
 
  return (
    <div>
      <h2>Let's get started!</h2>
      <Card className="expense">
      <NewExpense onadd={add}></NewExpense>
      </Card>
      
      
      <Card className="expense">
      <Filter></Filter>
     
      
      
     
      <Expense Data={espense}></Expense>
        
   
      
      
      
      
      </Card>
  
      
      
      
      {/* <ExpenseItems .
      title={expenses[0].title}
       amount={expenses[0].amount} 
       date={expenses[0].date} 
       ></ExpenseItems> */}
       
      
      
      
    </div>
  );
}

export default App;
