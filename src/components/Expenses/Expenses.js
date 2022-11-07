import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
		<div className='expenses'>
			<ExpenseItem item={props.items[0]}></ExpenseItem>
			<ExpenseItem item={props.items[1]}></ExpenseItem>
			<ExpenseItem item={props.items[2]}></ExpenseItem>
			<ExpenseItem item={props.items[3]}></ExpenseItem>
		</div>
	);
}

export default Expenses;