import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="card col-4">
      <img src={props.course.courseimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.course.coursename}</h5>
        <p className="card-text">{props.course.coursedesc}</p>
        <Link to={{ pathname: `/course/${props.course._id}` }}>Open</Link>
      </div>
    </div>
  );
}

export default Item;
