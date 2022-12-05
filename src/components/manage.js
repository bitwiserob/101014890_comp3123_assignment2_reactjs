import Table from 'react-bootstrap/Table';

function ManageEmployeeTable({data}) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>

            {data.map((data)=>{
                return(
                    <tbody key={data.email}>
                    <tr>
                        <td>{data.first_name}</td>
                        <td>{data.first_name}</td>
                        <td>{data.email}</td>
                    </tr>
                    </tbody>
                )
            })}

        </Table>
    );
}

export default ManageEmployeeTable;