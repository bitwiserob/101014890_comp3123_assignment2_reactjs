import ManageEmployeeTable from "../manage";
import {useEffect, useState} from "react";
import axios from 'axios'
const EmployeeView = () => {
    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        axios.get(`https://101014890-comp-3123-assignment1.vercel.app/api/employee`)
            .then((response) => {
                // setEmpData(response.data);
                console.log("RESPONSE IS")

                console.log(response.data['sucess'])
                setEmpData(response.data['sucess'])
            }).catch(reason => console.log(reason))
    }, [])
    console.log(empData['success']);
    return <>
        <ManageEmployeeTable data={empData}></ManageEmployeeTable>
    </>;
}

export default EmployeeView;