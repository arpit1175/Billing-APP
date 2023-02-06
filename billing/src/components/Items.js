import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import TextField from '@mui/material/TextField';
import "./Items.css"
import Invoice from '../components/Invoice'
import { Link } from 'react-router-dom';
import { Input } from '@mui/material';






const Items = () => {

    const [itemsdata, setdata] = useState([]);
    const [ids, setid] = useState(1);
    const [values, setvalue] = useState(0);
    const [totalquantity, settotalquantity] = useState(0)
    const [price, setprice] = useState(0)
    


    const getdata = async (e) => {
        try {
            const res = await fetch("http://localhost:8002/getitems", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();

            setdata(data);
        } catch (err) {
            console.log("error")
        }
    }
  
    const updatequantity = (id, value) => {
        setid(id)
        setvalue(value)
              
    }


    const checkinput = (id, value)=>{

        const val = Number(value)

        if(!isNaN(val)){
            updatequantity(id, val)
        }
        else{

            alert("Not a valid Quantity , please enter a number")
        }
    }


    

    console.log("id :" + ids)
    console.log("value:" + values)


    const setquantity = async (ids, values) => {
        try {
            const response = await fetch("http://localhost:8002/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ids, values })
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    }
    setquantity(ids, values);

    const totquantity = async () => {
        try {
            const res = await fetch("http://localhost:8002/quantitysum", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            console.log(data.total_sum)
            settotalquantity(data.total_sum);
        } catch (err) {
            console.log("error")
        }
    }
    totquantity();

    // console.log(totalquantity)
   
   const totalprice= async () => {
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

    return (
        <>
            <div className='container mt-5 items'>

                <Table striped bordered hover>
                    <thead >
                        <tr className='table-dark'>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Quantity</th>

                        </tr>
                    </thead>

                    <tbody >
                        {
                            itemsdata.map((e) => {
                                return <>
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.price}</td>
                                        <td className='tdata'>
                                            <div className='inputquantity'>
                                                <Input id={e.id} label="Quantity" inputProps={{ min: 0 }}  onChange={(event) => checkinput(e.id, event.target.value)}></Input>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            })


                        }

                    </tbody>

                </Table>
            </div>
<Invoice e = {totalquantity} price= {price}/>
        </>
    )
}

export default Items
