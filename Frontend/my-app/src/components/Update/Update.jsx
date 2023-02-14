import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

function Update() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [id, setID] = useState(null);

    const updateAPIData = () => {
        const employeeData =
        {
            name,
            position,
            location,
            salary
        }
        axios.put(`http://localhost:3001/update/${id}`,
            employeeData
        ).then((response) => {
            console.log(response.data)
            // console.log(response.status)
            if (response.data.status === "Updated") {
                alert("Employee updated successfully")
                navigate('/Admin')
            }
            else
            {
                alert("Something went wrong");
            }

        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setPosition(localStorage.getItem('Position'));
        setLocation(localStorage.getItem('Location'));
        setSalary(localStorage.getItem('Salary'));
    }, [])


    return (
        <>
            <Form>
                <Form.Field>
                    <label>Name</label><br/>
                    <input name='name' placeholder='enter your name here' value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
                </Form.Field>
                <Form.Field>
                    <label>Designation</label><br/>
                    <input name='position' placeholder='enter your designation here' value={position} onChange={(e) => setPosition(e.target.value)} /><br/><br/>
                </Form.Field>
                <Form.Field>
                    <label>Location</label><br/>
                    <input name='location' placeholder='enter your location here' value={location} onChange={(e) => setLocation(e.target.value)}/><br/><br/>
                </Form.Field>
                <Form.Field>
                    <label>Salary</label><br/>
                    <input name='salary' placeholder='enter your salary here' value={salary} onChange={(e) => setSalary(e.target.value)}/><br/><br/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Submit</Button>
            </Form>
            {/* <div>
                <form className='form'>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Name</label>
                        <input className="form-control" type="text" name='name' placeholder='enter your name here' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Designation</label>
                        <input className="form-control" type="text" name='position' placeholder='enter your designation here' value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Location</label>
                        <input className="form-control" type="text" name='location' placeholder='enter your location here' value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Salary</label>
                        <input className="form-control" type="text" name='salary' placeholder='enter your salary here' value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <Button type='submit' onClick={updateAPIData}>Submit</Button>
                        <button type="button" onClick={updateAPIData} className="btn btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div> */}
        </>
    )
}
export default Update