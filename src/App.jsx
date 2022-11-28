import React from 'react';
import './App.css';
import Feed from './components/Feed';

const people = [ "Name 1", "Name 2", "Name 3"];

function App() {
  return (
    <div>
      <div>
        <Feed list={people} alt={"Default"}/>
      </div>
    </div>
  );
}

export default App;
