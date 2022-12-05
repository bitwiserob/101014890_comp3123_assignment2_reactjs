import AddEmpForm from "../forms/add";
import {useState} from "react";

const EmployeeAdd = () => {
    const [message, setMessage] = useState([]);
    return <>

        <AddEmpForm></AddEmpForm>
    </>;
}

export default AddEmpForm;