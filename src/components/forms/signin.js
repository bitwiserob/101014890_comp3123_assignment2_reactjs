import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SignInForm = ()=>{
    return<>
        <Form>
            <Form.Label><h2>Sign in</h2></Form.Label>
            <Form.Group className={"mb-3"}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" className={"mb-3"}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default SignInForm;