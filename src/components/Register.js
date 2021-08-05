import { useState } from "react"
import { useCookies } from 'react-cookie'
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

function Register() {
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['authtoken', 'email', 'name'])
    const history = useHistory()

    if (cookies.authtoken) {
        history.push('/')
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('please enter name')
            return
        }

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
            body: JSON.stringify({ name, email, password })
        }
        fetch('http://206.189.108.238:8000/api/user/register', requestOptions)
            .then(res => {
                res.json()
            })
            .then(out => {
                history.push('/login')

            })
            // .catch(err => {
            //     console.log(err)
            //     setError(err)
            // })
    }

    return (
        <div className="container login-container">
            <Form className="login-container-form col-4">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
                <br/><br/>
                <Link to="/login">Login if have id</Link>
            </Form>
        </div>
    )
}

export default Register
