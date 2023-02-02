import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Table from 'react-bootstrap/Table';
import ReactToPrint from 'react-to-print';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Bill = () => {


    const [data, setdata] = useState([])
    const [price, setprice] = useState(0)
    const componentRef = useRef();
    // const[id, setid] = useState(0)


    const getdata = async () => {
        try {
            const res = await fetch("http://localhost:8002/bill", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            console.log(data)
            setdata(data);
        } catch (err) {
            console.log("error")
        }
    }



    const totalprice = async () => {
        try {
            const res = await fetch("http://localhost:8002/totalprice", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            console.log(data.total_sum)
            setprice(data.total_sum);
        } catch (err) {
            console.log("error")
        }
    }
    totalprice();



    useEffect(() => {
        getdata();

    }, []);

    let id = 0;

    return (

        <>
            <Navbar />
            <div className='container table-container'>
                <div className='mt-4' style={{ "height": "50px" }}>
                    <ReactToPrint
                        trigger={() => { return <LocalPrintshopIcon fontSize='large' style={{ "cursor": "pointer", "float": "right" }} /> }}
                        content={() => componentRef.current}
                        documentTitle="bill"
                        pageStyle="print"
                    />

                    <Link to={"/"}>
                        
                    <HomeIcon fontSize='large' style={{ "cursor": "pointer" }} />
                    </Link>
                </div>
                <div className='container mt-5'>
                    <Table striped bordered hover ref={componentRef}>
                        <thead >


                            <tr >
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Total </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e) => {
                                    id = id + 1
                                    return <>
                                        <tr>
                                            <td>{id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td>{e.quantity}</td>
                                            <td>{e.price * e.quantity}</td>
                                        </tr>
                                        <tr>
                                        </tr>
                                    </>
                                })
                            }
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total Price</th>
                            <th>{price} </th>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Bill