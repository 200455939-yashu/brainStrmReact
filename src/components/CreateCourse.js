import { useState } from "react"
import { useCookies } from 'react-cookie'
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

function CreateCourse() {
    const [coursename, setCoursename] = useState('')
    const [courseimg, setCourseimg] = useState('')
    const [coursedesc, setCoursedesc] = useState('')
    const [courseVideo1Title, setCourseVideo1Title] = useState('')
    const [courseVideo2Title, setCourseVideo2Title] = useState('')
    const [courseVideo1Video, setCourseVideo1Video] = useState('')
    const [courseVideo2Video, setCourseVideo2Video] = useState('')
    const [cookies, setCookie] = useCookies(['authtoken', 'email', 'name', 'user'])
    const history = useHistory()

    if (!cookies.authtoken) {
        history.push('/')
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (!coursename) {
            alert('please enter coursename')
            return
        }
        if (!courseimg) {
            alert('please enter courseimg')
            return
        }
        if (!coursedesc) {
            alert('please enter coursedesc')
            return
        }
        if (!courseVideo1Title) {
            alert('please enter courseVideo1Title')
            return
        }
        if (!courseVideo2Title) {
            alert('please enter courseVideo2Title')
            return
        }
        if (!courseVideo1Video) {
            alert('please enter courseVideo1Video')
            return
        }
        if (!courseVideo2Video) {
            alert('please enter courseVideo2Video')
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'auth-token': cookies.authtoken },
            body: JSON.stringify({ coursename, coursedesc, courseimg, courseVideo1Title, courseVideo2Title, courseVideo1Video, courseVideo2Video, user: cookies.user })
        }
        fetch('http://206.189.108.238:8000/api/course/create', requestOptions)
            .then(res => {
                if (res.ok) {
                    history.push('/')
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Form className="login-container-form col-4 text-left">
                <Form.Group className="mb-3" controlId="formBasicCoursename">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="" value={coursename} onChange={(e) => setCoursename(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCourseimg">
                    <Form.Label>Course image</Form.Label>
                    <Form.Control type="text" placeholder="" value={courseimg} onChange={(e) => setCourseimg(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCoursedesc">
                    <Form.Label>Course description</Form.Label>
                    <Form.Control type="text" placeholder="" value={coursedesc} onChange={(e) => setCoursedesc(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCoursedesc">
                    <Form.Label>title 1</Form.Label>
                    <Form.Control type="text" placeholder="" value={courseVideo1Title} onChange={(e) => setCourseVideo1Title(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCoursedesc">
                    <Form.Label>video 1</Form.Label>
                    <Form.Control type="text" placeholder="" value={courseVideo1Video} onChange={(e) => setCourseVideo1Video(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCoursedesc">
                    <Form.Label>title 2</Form.Label>
                    <Form.Control type="text" placeholder="" value={courseVideo2Title} onChange={(e) => setCourseVideo2Title(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCoursedesc">
                    <Form.Label>video 2</Form.Label>
                    <Form.Control type="text" placeholder="" value={courseVideo2Video} onChange={(e) => setCourseVideo2Video(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>            
        </div>
    )
}

export default CreateCourse
