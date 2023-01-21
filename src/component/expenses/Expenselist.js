import Expense from "./Expense"
import ExpenseItems from "./ExpenseItems"
import './Expenselist.css'
const Expenselist=(props)=>{
   if(props.item.length===0){
    return<h2 className="expenses-list__fallback">Found no expense</h2>
   }
    
      
    return(
        <li className="expenses-list">
            {props.item.map(expense=><ExpenseItems 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)}
    
        </li>
    )

}
export default Expenselist
