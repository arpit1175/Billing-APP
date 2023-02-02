import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import "./Invoice.css"



const Invoice = (props) => {
    
    return (
        <>
            <div className='container mt-5'>
                <div className='tab'>
                    <Table bordered hover>
                        <thead className='table-dark'>
                            <tr>
                                <th>Total Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.e}</td>
                                <td>{props.price}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

                <div className='createbill'>

                    <Link to={"/bill"}>
                    <Button variant="success">CREATE BILL</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Invoice