import '../expenses/ExpenseItem.css'
import React,{useState} from 'react'
import './NewForm.css'

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
       title:newTitle,
       date:new Date(newdate),
       amount:newAmount
   }
   probs.onsave(expenseData)

   setAmount("")
   setDate("")
   setTitle("")
   //console.log(expenseData)
   }
   return(
       <form  onSubmit={submit}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
           <label className='new-expense__control lable'>date</label>
           <input className='new-expense__control input' type="Date"id="date" onChange={Dateinput} value={newdate}></input>
           </div>
           <div className='new-expense__control'>
           <label className='new-expense__control lable'>title</label>
           <input className='new-expense__control input' type="text"id="title"onChange={Titleinput} value={newTitle}></input>
           </div>
           <div className='new-expense__control'>
           <label className='new-expense__control lable'>amount</label>
           <input className='new-expense__control input' type="text"id="amount"onChange={Amountinput} value={newAmount}></input>
           </div>
        </div>
           
           
        <div className='new-expense__actions'>
        
        <button type='submit'>Add Expense</button>
      </div>
    


           
       </form>
   )
}
export default Form;