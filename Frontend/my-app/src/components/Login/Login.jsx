import React from 'react'
import { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authenticate = () => {
        const userData =
        {
            "username": username,
            "password": password
        }
        // console.log(userData)
        axios.post(`http://localhost:3001/signin`,
            userData
        ).then((response) => {

            console.log(response.data)
            // console.log("first")

            if (response.data.status === "success") {

                let token = response.data.token
                let userId = response.data.data[0]._id
                // alert("valid user")
                // alert("userId => " + userId)
                // alert("token => " + token)

                sessionStorage.setItem("userToken", token)
                sessionStorage.setItem("userId", userId)
                if (username === "admin") {
                    navigate("/Admin")
                }
                else {
                    navigate("/Employee")
                }
            }
            else {
                alert("Invalid user")

            }

        })
    }
    return (
        <>
            <div>
                <Form>
                    <Form.Field>
                        <br />
                        <h3>Log In</h3>
                        <br />
                        <label>Username</label><br /><br />
                        <input type="text" name='username' placeholder='enter your username here' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Field>
                    <Form.Field><br />
                        <label>Password</label><br /><br />
                        <input type="password" name='password' placeholder='enter your password here' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Field><br />
                    <Button type='button' onClick={authenticate}>Submit</Button>

                </Form>
                {/* <form class='form'>
                    <br />
                    <h3>Log In</h3>
                    <br />
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Username</label>
                        <input class="form-control" type="text" name='name' placeholder='enter your username here' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                        <input class="form-control" type="password" name='designation' placeholder='enter your password here' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <button type="submit" onClick={authenticate} class="btn btn-outline-primary">Log in</button>
                    </div>
                </form> */}
            </div>
        </>
    )
}

export default Login