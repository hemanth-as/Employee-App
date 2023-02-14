import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Create.css'
import { useNavigate } from 'react-router-dom'

function Create() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const sendDataToApi = () => {
        
        
        var token = sessionStorage.getItem("userToken");
        const employeeData =
        {
            token,
            name,
            position,
            location,
            salary
        }
        console.log(employeeData)
        axios.post('http://localhost:3001/admin/create',
            employeeData
        ).then((response) => {
            console.log(response.data)
            // console.log("second")
            if (response.data.status === "unauthorised user") {
                alert("Login first");
                navigate('/')
            }
            else {
                if (response.data.status === "authorised user") {
                    alert("Employee added successfully");
                    navigate('/Admin');
                }
                else {
                    console.log(response.data)
                    alert("something went wrong");
                }
            }
        })
    }

    return (
        <>

            <div>
                <form className='form'>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Name</label>
                        <input className="form-control" type="text" name='name' placeholder='enter your name here' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Designation</label>
                        <input className="form-control" type="text" name='designation' placeholder='enter your designation here' onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Location</label>
                        <input className="form-control" type="text" name='location' placeholder='enter your location here' onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Salary</label>
                        <input className="form-control" type="text" name='salary' placeholder='enter your salary here' onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button type="button" onClick={sendDataToApi} className="btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Create