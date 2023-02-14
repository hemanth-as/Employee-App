import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Admin.css'


function Admin() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/employeelist`)
            .then((getData) => {
                setAPIData(getData.data);
            })

    }, [])

    const setData = (data) => {

        let { _id, name, position, location, salary } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Position', position);
        localStorage.setItem('Location', location);
        localStorage.setItem('Salary', salary);


    }

    const getData = () => {
        axios.get(`http://localhost:3001/employeelist`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:3001/delete/${_id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <div className='buttonc'>
                <Link to='/'>
                    <button className="btn btn-sm btn-outline-secondary" type="button">Log out</button>
                </Link>
            </div>
            <div className='buttonc'>
                <Link to='/Create'>
                    <button className="btn btn-sm btn-outline-secondary" type="button">Add New Employee</button>
                </Link>
            </div>
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {APIData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.location}</td>
                                    <td>{data.position}</td>
                                    <td>{data.salary}</td>
                                    <Link to='/Update'>
                                        <td><button onClick={() => setData(data)} className="btn btn-outline-primary me-2" type="submit">Update</button></td>
                                    </Link>
                                    <td><button onClick={() => onDelete(data._id)} className="btn btn-outline-secondary me-2" type="button">Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin