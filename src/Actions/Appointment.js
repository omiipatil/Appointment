import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import "../index.css";
import Button from 'react-bootstrap/Button';

const Appointment = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getLocalValues = JSON.parse(localStorage.getItem("sheduleinfo"));
        setData(getLocalValues);
    }, [])


    const deleteItems = (index) => {
        let getLocalValues = [...JSON.parse(localStorage.getItem("sheduleinfo"))];
        if (getLocalValues && getLocalValues?.length > 0) {
            getLocalValues.splice(index, 1)
        }
        localStorage.setItem('sheduleinfo', JSON.stringify(getLocalValues))
        setData(getLocalValues)
    }
    return (
        <>
            <Navbar />
            <div className="student-wrap">
                <div className="text-wrap">
                    <span className="span-1"><h3 style={{ fontSize: "50px" }}>Appoiment  Details</h3></span>
                    <div><Button variant="success"><Link to="/createAppoint" >Add Appoiment</Link>
                    </Button>{' '}</div>

                </div>
                <div className='table-wrap'>
                    <table style={{ width: '80%', border: "2px solid black", marginLeft: '360px', marginTop: '50px', dispay: 'flex', }}>
                        <thead>
                            <tr className='table-heading'>
                                <th>Sr.No</th>
                                <th>MeetingTitle</th>
                                <th>MeetingRoom</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th> Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {

                                data?.map((_data, index) => (
                                    <tr key={_data?.id}>
                                        <td>{index + 1}</td>
                                        <td>{_data?.MeetingTitle}</td>
                                        <td>{_data?.MeetingRoom}</td>
                                        <td>{_data?.name}</td>
                                        <td>{_data?.Phone}</td>
                                        <td>{_data?.date}</td>
                                        <td><Button variant="danger" onClick={() => { deleteItems(index) }}>delete</Button>{' '}  </td>

                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )

}

export default Appointment;