import React, { useState, useContext } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { UserContext } from '../App'
import { Navigate } from 'react-router-dom'
import Apis, {endpoints, authApi} from '../config/Apis'
import cookies from 'react-cookies'


const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user, dispatch] = useContext(UserContext)

    const login = async (evt) => {
        evt.preventDefault() 
         
        const res = await Apis.post(endpoints['login'], {
            'username': username,
            'password': password,
            'client_id': 'KlNnQP4rpeA1ZkRe9GHBQaQKqS28miWLaBAlwNQc',
            'client_secret': 'BPrdnkQLKu0L8G4N9VYAmOY0slYlF4M4VfJuOcWZKTzT08dcvrOW2pKQDJHCQoTTwaCNGzBFYO2RXZm04ITST7Dj8NziF2F4Ld0SwxYzJ93E52kZRceAPd4OAM3ZuZfi',
            'grant_type': 'password'
        })

        console.info(res.data)
        cookies.save('token', res.data.access_token)

        const user = await authApi().get(endpoints['current-user'])
        console.info(user.data)
        dispatch({
            'type': 'login',
            'payload': user.data
        })
    }


    if (user != null)
        return <Navigate to="/" />
        
    return (
        <Container>
            <h1 className="text-center text-danger">DANG NHAP</h1>
            <Form onSubmit={login} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" 
                        value={username} 
                        onChange={(evt) => setUsername(evt.target.value)}
                        placeholder="Nhap username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                            value={password} 
                            onChange={(evt) => setPassword(evt.target.value)}
                            placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Dang nhap
                </Button>
            </Form>
        </Container>
    )
}

export default Login