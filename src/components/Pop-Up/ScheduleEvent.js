import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ScheduleEvent({ show, onHide }) {
    const [toggle, setToggle] = useState(show);
    const [getData, setgetData] = useState({
        add_title: "",
        s_date: "",
        e_date: "",
        time: " ",
        MeetingRoom: "",
        Description: " "

    })

    function onSubmit() {
        setToggle(false)
        let data = JSON.parse(localStorage.getItem("store"));
        let array = data || []
        array.push(getData)
        localStorage.setItem("store", JSON.stringify(array))
    }

    function putData(e) {
        const { name, value } = e.target;
        setgetData({ ...getData, [name]: value })
    }

    return (
        <>
            <Modal show={toggle} onHide={onHide}
                className={'modal fade z_5'}
                dialogClassName={'modal-dialog modal-dialog-centered modal-md delete-room'}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"></h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={onHide}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className="leave_room_wrap">


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Add Title :</Form.Label>
                                <Form.Control type="text" placeholder='Add Title' name="title" onChange={putData} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Descripition :</Form.Label>

                                <Form.Control type="text" name="Description" placeholder='Add Meeting Descripition..' onChange={putData} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Start Date :</Form.Label>
                                <Form.Control type="datetime-local" name="start" onChange={putData} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>End Date :</Form.Label>
                                <Form.Control type="datetime-local" name="end" onChange={putData} />
                            </Form.Group>

                            <Button variant="primary" onClick={onHide}>Close</Button>{' '}
                            <Button variant="primary" onClick={onSubmit}>Save</Button>{' '}

                        </div>
                    </div>
                </div>
            </Modal >
        </>
    );
}

export default ScheduleEvent;