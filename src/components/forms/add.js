import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddEmpForm = ()=>{
    return<>
        <Form>
            <Form.Label><h2>Add Emp</h2></Form.Label>
            <Form.Group className={"mb-3"}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>salary</Form.Label>
                <Form.Control type="text" placeholder="Enter Salary" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default AddEmpForm;