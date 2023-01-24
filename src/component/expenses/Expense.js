
import React ,{useState}from "react"
import ExpensesChart from "./ExpenseChart";
import ExpenseItems from "./ExpenseItems"
import Expenselist from "./Expenselist";
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
             <ExpensesChart expenses={FilteredExpense}></ExpensesChart>
             <Expenselist item={FilteredExpense}></Expenselist>
             
            
            </div>
        
      
       
      )
      
}
export default Expense
