import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

  const titleChangeHandler = (event) => {
    // 이렇게 하면 Data Lose가 없다.
    setUserInput((prevState) => {
      return {
				...prevState,
				enteredTitle: event.target.value,
			};
    });

    // 적용되는 속도 문제로 Data Lose가 생길 수 있다.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = event => {
    setUserInput((prevState) => {
			return {
				...prevState,
				enteredAmount: event.target.value,
			};
		});
  };

  const dateChangeHandler = event => {
    setUserInput((prevState) => {
			return {
				...prevState,
				enteredDate: event.target.value,
			};
		});
  };


  return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label> Title </label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label> amount </label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label> Title </label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-11-31'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
