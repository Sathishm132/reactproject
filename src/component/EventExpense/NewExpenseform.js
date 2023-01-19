import '../expenses/ExpenseItem.css'
import React,{useState} from 'react'

const Form=(probs)=>{
     const [newdate,setDate]= useState('')
    const [newTitle,setTitle]= useState('')
    const [newAmount,setAmount]= useState('')
    //const [userInput,setUserInput]=useState({
    //     newdate:"",
    //     newTitle:"",
    //     newAmount:"",

    // })

    
     const Dateinput=(event)=>{
        
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     newdate:event.target.value
        // })
        
    
     }
     const Titleinput=(event)=>{
       
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     newdate:event.target.value
        // })
        //console.log(userInput)
        
    
     }
     const Amountinput=(event)=>{
       
        setAmount(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     newdate:event.target.value
    // })
    
     }
    
    const submit=(event)=>{
    event.preventDefault()
    const expenseData={
        tite:newTitle,
        date:new Date(newdate),
        amount:newAmount
    }
    probs.onsave(expenseData)

    setAmount("")
    setDate("")
    setAmount('')
    //console.log(expenseData)
    }
    return(
        <form className='expense-item' onSubmit={submit}>
            <div>
            <label>date</label>
            <input type="Date"id="date" onChange={Dateinput} value={newdate}></input>
            </div>
            <div>
            <label>title</label>
            <input type="text"id="title"onChange={Titleinput} value={newTitle}></input>
            </div>
            <div>
            <label>amount</label>
            <input type="text"id="amount"onChange={Amountinput} value={newAmount}></input>
            </div>
            
            
            <button type='submit'>submit</button>
        </form>
    )
}
export default Form;

