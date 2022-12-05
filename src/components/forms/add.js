import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import axios from "axios";
const AddEmpForm = ()=>{
   let [employee, setEmployee] = useState({first_name:"",last_name:"", email:"", gender:"other", salary:0});
    const clickHandle = ()=>{
        console.log(employee);
        axios.post(`https://101014890-comp-3123-assignment1.vercel.app/api/employee/`,
            employee)
            .then((response) => {
                console.log("RESPONSE IS")
                console.log(response)

                
            }).catch(reason => console.log(reason))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    return<>
        <Form onSubmit={handleSubmit}>
            <Form.Label><h2>Add Emp</h2></Form.Label>
            <Form.Group className={"mb-3"}>
                <Form.Label>First Name</Form.Label>
                <Form.Control value={employee['first_name']} onChange={(e) => setEmployee(
                    {
                        ...employee,
                        first_name:e.target.value
                    }
                )} placeholder="Enter First Name" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={employee['last_name']} onChange={(e) => setEmployee(
                    {
                        ...employee,
                        last_name:e.target.value
                    }
                )}  placeholder="Enter Last Name" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmployee(
                    {
                        ...employee,
                        email:e.target.value
                    }
                )}  value={employee['email_address']} className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>salary</Form.Label>
                <Form.Control type="number" placeholder="Enter Salary" onChange={(e) => setEmployee(
                    {
                        ...employee,
                        salary:parseInt(e.target.value)
                    }
                )}  value={employee['salary']} className={"mb-3"}></Form.Control>
            </Form.Group>
            <Button onClick={clickHandle} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default AddEmpForm;