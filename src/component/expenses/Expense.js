
import React ,{useState}from "react"
import ExpenseItems from "./ExpenseItems"
import Filter from "./FilterComponent"
const Expense=(props)=>{
      //console.log(props)
  const [filteredYear,setFilterYear]=useState("2020");
  const filterevent=(selectedYear)=>{
      setFilterYear(selectedYear);
  }

    const FilteredExpense=props.Data.filter(fexpensed=>{
      return (fexpensed.date.getFullYear().toString()===filteredYear)
    })


      return(
            <div>
             <Filter
             selected={filteredYear}
             onChangeFilter={filterevent}></Filter>
            {FilteredExpense.map(expense=><ExpenseItems 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)}
            </div>
        
      
       
      )
      
}
export default Expense
