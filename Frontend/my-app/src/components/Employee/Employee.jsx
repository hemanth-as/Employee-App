import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Employee.css'
import { Link } from 'react-router-dom'



const Employee = () => {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/employeelist`)
            .then((getData) => {
                setAPIData(getData.data);
            })

    }, [])

    return (
        <div>
            {/* //     <Table celled inverted selectable>
            //         <Table.Header>
            //             <Table.Row>
            //                 <Table.HeaderCell>Name</Table.HeaderCell>
            //                 <Table.HeaderCell>Status</Table.HeaderCell>
            //                 <Table.HeaderCell>Notes</Table.HeaderCell>
            //             </Table.Row>
            //         </Table.Header>

            //         <Table.Body>
            //             <Table.Row>
            //                 <Table.Cell>John</Table.Cell>
            //                 <Table.Cell>Approved</Table.Cell>
            //                 <Table.Cell textAlign='right'>None</Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>Jamie</Table.Cell>
            //                 <Table.Cell>Approved</Table.Cell>
            //                 <Table.Cell textAlign='right'>Requires call</Table.Cell>
            //             </Table.Row>
            //             <Table.Row>
            //                 <Table.Cell>Jill</Table.Cell>
            //                 <Table.Cell>Denied</Table.Cell>
            //                 <Table.Cell textAlign='right'>None</Table.Cell>
            //             </Table.Row>
            //         </Table.Body>
            //     </Table> */}
            <div>
            <div className='buttonc'>
                <Link to='/'>
                    <button className="btn btn-sm btn-outline-secondary" type="button">Log out</button>
                </Link>
            </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Location</th>
                            <th>Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {APIData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.position}</td>
                                    <td>{data.location}</td>
                                    <td>{data.salary}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee

