import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// function App() {
  const App = () => {
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);

  const expenses = [
		{
			id: 'el1',
			title: 'Car Insurance',
			amount: 222.111,
			date: new Date(2021, 2, 11),
		},
		{
			id: 'el2',
			title: 'Hospital Insurance',
			amount: 112.111,
			date: new Date(2021, 2, 12),
		},
		{
			id: 'el3',
			title: 'Car Insurance2',
			amount: 324.111,
			date: new Date(2021, 2, 13),
		},
		{
			id: 'el4',
			title: 'Car Insurance3',
			amount: 232122.111,
			date: new Date(2021, 3, 21),
		},
		{
			id: 'el5',
			title: 'Car Insurance4',
			amount: 24422.111,
			date: new Date(2021, 4, 21),
		},
		{
			id: 'el6',
			title: 'Car Insurance5',
			amount: 22322.111,
			date: new Date(2021, 5, 21),
		},
  ];
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s code '),
  //   React.createElement(Expenses, {items: expenses})
  // );
    
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
		<div>
      <NewExpense onSavedData={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
