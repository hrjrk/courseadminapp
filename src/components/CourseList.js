import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CourseList(props) {
  debugger;
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author Name</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {props.courses.map( course => {
                return <tr key={course.id}>
                    <td>
                        <button className="btn btn-outline-danger" onClick={() => props.deleteCourse(course.id)}>
                        Delete
                        </button>
                    </td>
                    <td>
                        <Link to={"/course/" + course.slug}>{course.title}</Link>
                    </td>
                    <td>{props.getAuthorNameById(course.authorId).name}</td>
                    <td>{course.category}</td>
                </tr>
            })}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    deleteCourse: PropTypes.func.isRequired,
    getAuthorNameById: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({   //each obj in array must have these props
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        })).isRequired
};

CourseList.defaultProps = { //if courses is not passed as props, it will set it to [] by default
    courses: []
};
export default CourseList;