import './App.css';
import { lazy , Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Login = lazy(()=>import("./components/Login/Login"))
const Register=lazy(()=>import("./components/Login/Register"))
const Home=lazy(()=>import("./components/Navbar/Home"))
const Error =lazy(()=>import("./components/Navbar/Error"))
const Appointment=lazy(()=>import("./Actions/Appointment"))
const CreateAppoint=lazy(()=>import("./Actions/CreateAppoint"))

function App() {

  return (
    <div>
<Suspense fallback={<h1 className='Loading'> Loading...</h1>}>
      <BrowserRouter>
      
        <Routes>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/appointment' element={<Appointment />} ></Route>
          <Route path='/createAppoint' element={<CreateAppoint />} ></Route>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
          
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

