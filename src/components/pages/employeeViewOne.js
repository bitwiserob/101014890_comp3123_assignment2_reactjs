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

                console.log(response.data['sucess'])
                setEmpData(response.data['sucess'])
            }).catch(reason => console.log(reason))
    }, [])
    console.log(empData['success']);
    return <>
        <h2>Manage employees</h2>
        <Button variant="primary" href={"/add"} className={"mb-2"}>Add</Button>
        <ManageEmployeeTable data={empData}></ManageEmployeeTable>
    </>;
}

export default EmployeeView;