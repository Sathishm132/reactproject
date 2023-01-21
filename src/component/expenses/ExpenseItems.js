import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../uI/Card';
import './ExpenseDate.css'
import ExpenseDetials from './ExpenseDetials';
import './ExpenseItem.css'
import Form from '../EventExpense/NewExpenseform';

const ExpenseItems=(props)=>{
    // const [title,setTitle]=useState(props.title)
    
    // const [amount,setAmount]=useState(props.amount)
    // const clickevent=()=>{
    //     setTitle("updated")t
    //     setAmount("100 rs")
    //     console.log(title)
        
    console.log(props)
    return(
        <Card className='expense-item '>
          <ExpenseDate date={props.date}></ExpenseDate>   

         <ExpenseDetials tittle={props.title}
         amount={props.amount}
              ></ExpenseDetials>
              {/* <button onClick={clickevent}> change title</button> */}
        </Card>
      
    )
}
export default ExpenseItems