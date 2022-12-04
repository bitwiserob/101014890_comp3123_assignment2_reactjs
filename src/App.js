import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

import EmployeeView from "./components/pages/employeeView";
import SignIn from "./components/pages/signin";
import EmployeeAdd from "./components/pages/employeeAdd";
import EmployeeUpdate from "./components/pages/employeUpdate";
import EmployeeDelete from "./components/pages/employeeDelete";
import NavbarMain from "./components/navbar/navbar";
import Signup from "./components/forms/signup";
import SignOut from "./components/pages/signout";
import SignUp from "./components/pages/signup";



function App() {

  return (
    <div className="App">
        <NavbarMain></NavbarMain>
        <div className={"app-body shadow p-3 border-3 mt-2"}>
            <Router>
                <Routes>
                    <Route path="/" element ={<SignIn/>} />
                    <Route path="/view" element ={<EmployeeView/>} />
                    <Route path="/add" element ={<EmployeeAdd/>} />
                    <Route path="/update" element ={<EmployeeUpdate/>} />
                    <Route path="/delete" element ={<EmployeeDelete/>} />
                    <Route path="/signup" element ={<SignUp/>} />
                    <Route path="/signout" element ={<SignOut/>} />
                    <Route path="/delete" element ={<EmployeeDelete/>} />
                </Routes>
            </Router>
        </div>

    </div>
  );
}

export default App;
