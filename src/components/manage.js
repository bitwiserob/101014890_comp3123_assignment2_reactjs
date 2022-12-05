import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function ManageEmployeeTable({data}) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Update</th>
                <th>View</th>
            </tr>
            </thead>

            {data.map((data)=>{
                return(
                    <tbody key={data.email}>
                    <tr>
                        <td>{data.first_name}</td>
                        <td>{data.first_name}</td>
                        <td>{data.email}</td>
                        <td><Link to={`/delete/${data._id}`} className={"btn btn-danger "}>Delete</Link></td>
                        <td><Link to={`/update/${data._id}`} className={"btn btn-primary "}>Update</Link></td>
                        <td><Link to={`/view/${data._id}`} className={"btn btn-primary "}>View</Link></td>
                    </tr>
                    </tbody>
                )
            })}

        </Table>
    );
}

export default ManageEmployeeTable;