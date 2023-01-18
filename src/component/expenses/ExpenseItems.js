import ExpenseDate from './ExpenseDate'
import Card from '../uI/Card';
import './ExpenseDate.css'
import ExpenseDetials from './ExpenseDetials';
import './ExpenseItem.css'
const ExpenseItems=(props)=>{
    const clickevent=()=>{
        console.log("button clicked")
    }
    return(
        <Card className='expense-item '>
        <ExpenseDate date={props.date}></ExpenseDate>

         <ExpenseDetials title={props.title}
              amount={props.amount}></ExpenseDetials>
              <button onClick={clickevent}> change title</button>
        </Card>
      
    )
}
export default ExpenseItems