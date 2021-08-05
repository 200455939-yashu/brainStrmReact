import { useState } from "react"
import { useCookies } from 'react-cookie'
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['authtoken', 'email', 'name', 'user'])
    const history = useHistory()

    if (cookies.authtoken) {
        history.push('/')
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            alert('please enter email')
            return
        }

        if (!password) {
            alert('please enter password')
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }
        fetch('http://206.189.108.238:8000/api/user/login', requestOptions)
            .then(res => res.json())
            .then(out => {
                console.log(email)
                setCookie('authtoken', out.token, { path: '/' })
                setCookie('email', out.email, { path: '/' })
                setCookie('name', out.name, { path: '/' })
                setCookie('user', out.user, { path: '/' })
                history.push('/')
            }).catch(function(error) {
                console.log(error);
            });
    }

    return (
        <div className="container login-container">
            <Form className="login-container-form col-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
                <br/><br/>
                <Link to="/register">Register if dont have id</Link>
            </Form>
        </div>
    )
}

export default Login
