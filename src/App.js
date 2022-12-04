import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

import EmployeeView from "./components/pages/employeeView";
import SignIn from "./components/pages/signin";
import EmployeeAdd from "./components/pages/employeeAdd";
import EmployeeUpdate from "./components/pages/employeUpdate";
import EmployeeDelete from "./components/pages/employeeDelete";



function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element ={<SignIn/>} />
                <Route path="/view" element ={<EmployeeView/>} />
                <Route path="/add" element ={<EmployeeAdd/>} />
                <Route path="/update" element ={<EmployeeUpdate/>} />
                <Route path="/delete" element ={<EmployeeDelete/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
