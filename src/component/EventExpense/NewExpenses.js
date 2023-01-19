import Form from "./NewExpenseform";
import './NewForm.css';
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
        <div className="form">
            <Form onsave={entereddata}></Form>
        </div>
    )
}
export default NewExpense