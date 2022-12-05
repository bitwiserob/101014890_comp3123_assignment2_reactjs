import ManageEmployeeTable from "../manage";
import {useEffect, useState} from "react";

import axios from 'axios'
import Button from 'react-bootstrap/Button';
import {useParams} from "react-router-dom";
const EmployeeView = () => {
    const [empData, setEmpData] = useState([]);
    let { emp_id } = useParams();
    useEffect(() => {
        axios.get(`https://101014890-comp-3123-assignment1.vercel.app/api/employee/${emp_id}`)
            .then((response) => {
                // setEmpData(response.data);
                console.log("RESPONSE IS")

                console.log(response.data)
                setEmpData(response.data)
            }).catch(reason => console.log(reason))
    }, [])
    return <>
        <h2>Employee Name: {empData.first_name} {empData.last_name}</h2>
        <h4>Employee Gender: {empData.gender}</h4>
        <h4>Employee Salary: {empData.salary}</h4>
        <h4>Employee Email : {empData.email}</h4>

    </>;
}

export default EmployeeView;