import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { configure } from "@testing-library/react"
import Item from "./Item"

function AllCourse() {
    const [cookies, setCookie] = useCookies(['authtoken', 'email', 'name'])
    const [courses, setCourses] = useState({})
    const history = useHistory()

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    useEffect(() => {
        fetch('http://206.189.108.238:8000/api/course/all', requestOptions)
        .then(res => {
            return res.json()
        })
        .then(out => {
            setCourses(out)
        })
        .catch(function(error) {
            console.log(error)
        }) 
    }, [])

    return (
        <div className="container">
            {
                Object.keys(courses).map((e, i) => {
                    return <Item course={courses[e]} key={e}/>
                })
            }
        </div>
    )
}

export default AllCourse
