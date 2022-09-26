
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CreateAppointment = () => {

  const date = new Date();

  const navigate = useNavigate()
  const [meetingVar, setMeetingVar] = useState({
    MeetingTitle: "",
    MeetingRoom: "",
    name: "",
    Phone: "",
    date: "",
    id: new Date()

  })

  function schedule(e) {
    const { name, value } = e.target;
    setMeetingVar({
      ...meetingVar,
      [name]: value

    })

  }
  const Submit = (e) => {
    e.preventDefault();

    const { name, value, type } = meetingVar;
    if (name == '') {
      toast.info('Please Fills all Inputbox...', {
        position: "top-center"
      })
    }

    else if (value == '') {
      toast.info('Please Fills all Inputbox...', {
        position: "top-center"
      })

    }
    else if (type == '') {
      toast.info('Please Fills all Inputbox...', {
        position: "top-center"
      })
    }
    else {
      let localValues = JSON.parse(localStorage.getItem('sheduleinfo'));
      let array = localValues || [];
      array.push(meetingVar)
      localStorage.setItem("sheduleinfo", JSON.stringify(array));
      navigate('/appointment');
    }
  }
  return (
    <>
      <ToastContainer />
      <div className='Appointment-form'>
        <Form className='App-form'>
          <div><h1>Appoiment form</h1></div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Meeting Title :</Form.Label>
            <Form.Control type="text" placeholder="Add-Title" name="MeetingTitle" onChange={schedule} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Meeting Room:</Form.Label>
            <select id="select" name='MeetingRoom' onChange={schedule} style={{
              width: "190px",
              borderRadius: "5px", height: "40px", border: "1px solid  #d1d1d4"
            }}>
              <option required value="" >--Please choose an option--</option>
              <option value="Room1">Room1</option>
              <option value="Room2">Room2</option>
              <option value="Room3">Room3</option>
              <option value="Room4">Room4</option>
              <option value="Room5">Room5</option>
            </select>


          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter name :</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' onChange={schedule} />

          </Form.Group>


          <Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Phone No :</Form.Label>
              <Form.Control type="tel" id='number' name="Phone" onChange={schedule} />

            </Form.Group>



          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Date :</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" name='date' min='2022-09-07'
              onChange={schedule} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select</Form.Label>
            <select id="select" name="Daly" style={{ width: "190px", borderRadius: "5px", height: "40px", border: "1px solid  #d1d1d4" }}>
              <option Required value="" >Filter Revenue</option>
              <option value="">Daily</option>
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Yearly</option>

            </select>

          </Form.Group>
          <div className='submit-btn-div'>
            <Button variant="success" className='submit-btn1' onClick={Submit}> Submit </Button>{'  '}
          </div>


        </Form>

      </div>
    </>
  )
}
export default CreateAppointment;

