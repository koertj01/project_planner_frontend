import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskDrawer from './components/TaskDrawer';


const people = [ "Name 1", "Name 2", "Name 3"];

function App() {
  return (
    <>
      <Header className="grow basis-1 bg-blue-500" text="Header"/>
      <div className='flex flex-row flex-wrap p-25 gap-15px bg-blue-255'>
        <Feed list={people} alt={"Default"} className="basis-1/3 bg-green-500 max-h-max"/>
        <TaskDrawer className="p-1.5 basis-2/3 shadow-xl rounded-xl shadow-black-700 text-justify bg-white"/>
        <Footer className="grow bg-blue-700"/>
    </div>
    </>
  );
}

export default App;
