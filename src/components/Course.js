import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function Course(props) {
  // let query = useQuery();
  // const id = query.get("id");
  const [cookies, setCookie] = useCookies(["authtoken", "email", "name"]);
  const [course, setCourse] = useState({});
  const params = useParams()

  useEffect(() => {

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://206.189.108.238:8000/api/course/fetch/" + params.id, requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((out) => {
        setCourse(out);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  return (
    <div className="container">
      <p>{course.courseVideo1Title}</p>
      <video
        className="video-container"
        autoPlay=""
        loop=""
        muted=""
        data-reactid=".0.1.0.0"
        controls
        src={course.courseVideo1Video}
      >

      </video>
      <p>{course.courseVideo2Title}</p>
      <video
        className="video-container"
        autoPlay=""
        loop=""
        muted=""
        data-reactid=".0.1.0.0"
        controls
        src={course.courseVideo2Video}
      >
      </video>
    </div>
  );
}

export default Course;
