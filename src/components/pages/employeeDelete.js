import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const EmployeeDelete = () => {
    const [empData, setEmpData] = useState([]);
    let [message, setMessage] = useState("")

    let { emp_id } = useParams();
    useEffect(() => {
        axios.delete(`https://101014890-comp-3123-assignment1.vercel.app/api/employee/${emp_id}`)
            .then((response) => {
                console.log("RESPONSE IS")
                setMessage("USER DELETED");
                console.log(response.data)
            }).catch(reason => {
            console.log(reason)


        })
    }, [])

    return <>
        {message &&
            <div className={'alert alert-primary'}> {message} </div>
        }
    </>;
}

export default EmployeeDelete;