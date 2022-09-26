import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Error = () => {
  const history = useNavigate();

  return (
    <>
      <div className='container'>
        <h1>404 Error ! Page Not Found 😭</h1>
        <Button variant="light" onClick={() => history('/home')}>Redirect Home Page</Button>{' '}
      </div>
    </>
  )
}

export default Error;
