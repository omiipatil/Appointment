import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Navbar = () => {
    const history = useNavigate();
    const status = localStorage.getItem('loginStatus');
    // //   if(status){
    // //     history('/')
    //   }
    const logout = () => {
        localStorage.setItem('loginStatus', false);
        history('/');
    }



    return (
        <>
            <ul className='nav-links'>


                {

                    status ?
                        <>
                            <Button variant="success"><li><Link to='/home'>Home</Link></li>
                            </Button>{' '}
                            <Button variant="success"><li><Link to='/appointment'>Appointment</Link></li>
                            </Button>{' '}
                            {/* <Button variant="success"><li><Link to='/createAppoint'>Create Appointment</Link></li>
                            </Button>{' '} */}
                            <Button variant="primary"><li onClick={logout}>Logout</li>
                            </Button>{' '}

                        </>
                        :
                        <>
                            <li><Link to='/'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>

                        </>
                }




            </ul>
        </>
    )
}

export default Navbar;