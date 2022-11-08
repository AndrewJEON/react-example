import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
  return (
      <div className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map(item => <ExpenseItem key={item.id} item={item} /> )}
		</div>
	);
}

export default Expenses;