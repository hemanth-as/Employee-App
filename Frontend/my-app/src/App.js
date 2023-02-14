import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import image from "./backgroundimg.jpg"
import Login from './components/Login/Login'
import Create from './components/Create/Create'
import Employee from './components/Employee/Employee'
import Admin from './components/Admin/Admin'
import Update from './components/Update/Update'

function App() {
  return (
    <div className='main' style={{
      backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
      height: 700, width: 1500
    }}>
      <div id='title'>
        <h2>Employee Dashboard</h2>
      </div>
      <div className='buttons'>
        <BrowserRouter>
          <div className='buttonc'>
            <Link to='/'>
              <button className="btn btn-outline-dark me-2" type="button">Home</button></Link>
            {/* <Link to='/Create'>
                <button className="btn btn-sm btn-outline-secondary" type="button">Employee form</button>
              </Link> */}
          </div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/Employee' element={<Employee />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Update' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
