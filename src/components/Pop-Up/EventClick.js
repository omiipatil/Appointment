import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EventClick = ({ show, onHide }) => {
  const [localData, setlocalData] = useState()

  useEffect(() => {
    const eventData = JSON.parse(localStorage.getItem("store"));
    setlocalData(eventData);
  }, [])
  return (
    <>
      <Modal show={show} onHide={onHide} closeButton

        className={'modal fade z_5'}
        dialogClassName={'modal-dialog modal-dialog-centered modal-md delete-room'}
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-content">

          <div className="modal-body">


            <div className="leave_room_wrap">
              <p className="desc"> <strong></strong></p>
              <div className="btn-wrap text-right">

                <Button variant="danger">Danger</Button>{' '}


              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>)
}

export default EventClick;