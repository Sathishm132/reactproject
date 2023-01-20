
import React from "react"
import ExpenseItems from "./ExpenseItems"
const Expense=(props)=>{
      //console.log(props)
    


      return(
            <div>
            {props.Data.map(expense=><ExpenseItems 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)}
            </div>
        
      
       
      )
      
}
export default Expense
