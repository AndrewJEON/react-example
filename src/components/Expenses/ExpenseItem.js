import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.item.title);
  console.log(title);
  console.log(props.item.title);

	// setTitle(props.item.title);

  const clickHandler = () => {
    setTitle('aaaaaa');
		console.log('Click;');
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.item.date} />
			<div className='expense-item__description'>
				<h2>{props.item.title}</h2>
				<div className='expense-item__price'>${props.item.amount}</div>
			</div>
			<button onClick={clickHandler}> Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
