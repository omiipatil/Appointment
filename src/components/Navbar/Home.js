import React, { useState, useEffect, } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import ScheduleEvent from '../Pop-Up/ScheduleEvent';
import EventClick from '../Pop-Up/EventClick';
const Home = () => {
    const [clickEvent, setClickEvent] = useState(false)
    const [eventClick1, seteventClick1] = useState(false)
    const [data1, setdata1] = useState()


    const navigate = useNavigate();

    const onDateClick = (e) => {
        setClickEvent(true)

    }

    const onDataClick = () => { seteventClick1(true) }

    useEffect(() => {
        if (localStorage.getItem('loginStatus') !== 'true') {
            navigate('/');
        }

        const collectData = () => {
            const data = JSON.parse(localStorage.getItem("store"));
            setdata1(data);
        }
        collectData();

    }, []);
    console.log(data1)


    return (
        <>
            <div className='home-container'>
                <Navbar />
                <div className='home-1'>
                    <div className='' >

                    </div>
                    <div className='big-calender' style={{ width: "80%", marginLeft: "200px", marginTop: '100px' }}>
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            contentHeight="640px"
                            dateClick={onDateClick}
                            events={data1}
                            eventClick={onDataClick}
                            headerToolbar={{
                                center: 'dayGridMonth, timeGridWeek, timeGridDay',
                            }}
                        />
                    </div>
                </div>
            </div>

            {
                clickEvent && (
                    <ScheduleEvent
                        show={clickEvent}
                        onHide={() => setClickEvent(false)}
                    />
                )

            }

            {
                eventClick1 && (
                    <EventClick
                        show={eventClick1}

                        onHide={() => seteventClick1(false)}
                    />
                )
            }
        </>
    )
}

export default Home;

