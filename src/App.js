
import './App.css';



import SideNavbar from './My Components/SideNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDay from './My Components/MyDay';
import CommingTask from './My Components/ComingTask';
import Important from './My Components/Important';
import DoneTask from './My Components/DoneTask';
import NewTask from './My Components/NewTask';
import { createContext } from 'react';
import { useState } from 'react';

const allData = createContext();
const daysData = createContext();


function App() {
 const [tasks, setTasks] = useState([]);
const addTasks =(data)=>{
  setTasks([...tasks,data]);
}

 
  return (
    <>
    <allData.Provider value={{addTasks}}>
    <daysData.Provider value={tasks}>
    <Router>
        <div className="app">
          
          <SideNavbar />

          <Routes>
          <Route path="/" element={<MyDay />}  />
          <Route path="/comingtask" element={<CommingTask />} />
          <Route path="/important" element={<Important  />} />
          <Route path="/donetask" element={<DoneTask />} />
          <Route path="/addtask" element={<NewTask />} />


        </Routes>

        </div>
    </Router>
      </daysData.Provider>
    </allData.Provider>
    </>
  );
}

export default App;
export {allData};
export {daysData};
