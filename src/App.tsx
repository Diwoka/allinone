import React from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList/TodoList';
import Calendar from './components/Calendar/Calendar';
import Weather from './components/Weather/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-8">Mon Dashboard All-in-One</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TodoList />
          <Weather />
          {/* <Calendar /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
