import './ExpenseItem.css';
import card from '../uI/Card';

const ExpenseDetials=(props)=>{
   // console.log(props)
    return(
        <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h2>{props.place}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
    )
}
export default ExpenseDetials;