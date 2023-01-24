import React,{useState} from "react";
import Form from "./NewExpenseform";
import './NewExpense.css';
const NewExpense=(props)=>{
    const [addexpenpesdata,setAddexpensedata]=useState(false)
    const entereddata=(enteredexpense)=>{
        const expensedata={
            ...enteredexpense,
            id:Math.random().toString()

        }
        props.onadd(expensedata)
         setAddexpensedata(false)
       
       // console.log(expensedata)
    }
    const addexpense=(event)=>{
        setAddexpensedata(true)

    }
    const cancleaddexpense=()=>{
        setAddexpensedata(false)
    }
    return(
        <div className="new-expense">
           
            {!addexpenpesdata &&   <button onClick={addexpense}>add expense</button>}
            {addexpenpesdata&& <Form onsave={entereddata} oncancel={cancleaddexpense}></Form>}
          
        </div>
      
    )
        
    

  
    
}
export default NewExpense