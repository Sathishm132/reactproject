import './ExpenseItem.css'
function ExpenseItems(probs){
    return(
        <div className='expense-item'>
            <div>{probs.Date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{probs.title}</h2>
                <h2>{probs.place}</h2>
                <div className='expense-item__price'>{probs.amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItems