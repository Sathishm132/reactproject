import Form from "./NewExpenseform";
import './NewExpense.css';
const NewExpense=(props)=>{
    const entereddata=(enteredexpense)=>{
        const expensedata={
            ...enteredexpense,
            id:Math.random().toString()

        }
        props.onadd(expensedata)
       // console.log(expensedata)
    }
    return(
        <div className="new-expense">
            <Form onsave={entereddata}></Form>
        </div>
      
    )
        
    

  
    
}
export default NewExpense