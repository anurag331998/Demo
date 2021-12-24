
import './App.css';
import Expenses from './Components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Room rent',
      amount: 5000,
      date: new Date(2021, 12, 2),
    },
    {
      id: 'e2',
      title: 'Groceries',
      amount: 1500,
      date: new Date(2021, 12, 5)
    },
    {
      id: 'e3',
      title: 'Medical Insurance',
      amount: 1732,
      date: new Date(2021, 12, 7),
    },
    {
      id: 'e4',
      title: 'Wifi',
      amount: 699,
      date: new Date(2021, 12, 12),
    },
  ];

  return (
    <div>
      <h2>First React Code</h2>
      <p>Expense Tracker</p>
      <p>Month:
        <input type="text" placeholder='Type what you what'>
        </input>
      </p>
      <button>Click Me</button>
      <Expenses items={expenses} />
    </div>
  );

}

export default App;
