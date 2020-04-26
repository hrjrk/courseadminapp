import React, {useState, useEffect} from 'react';
import courseStore from '../stores/courseStore';
import authorStore from '../stores/authorStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { loadAuthors } from "../actions/authorActions";

function CoursesPage() {

    const [courses, setCourses] = useState(courseStore.getCourses());
    const [authors, setAuthors] = useState(authorStore.getAuthors());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0) {
                loadAuthors();
                loadCourses();
            }
        return () => courseStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setAuthors(authorStore.getAuthors());
        setCourses(courseStore.getCourses());
    }

    function getAuthorNameById(id)
    {
        return authors.find(author => author.id === id);
    }

        return(
            <>
                <h2>Courses</h2>
                <Link className="btn btn-primary" to="/course">
                    Add Course
                </Link>
                <CourseList courses={courses} deleteCourse={deleteCourse} getAuthorNameById={getAuthorNameById}/>
                </>
        );

}

export default CoursesPage;

/*class component
import React from 'react';
import {getCourses} from '../api/courseApi';

class CoursesPage extends React.Component{

    state = {
     courses: []
    };

    componentDidMount() {
        getCourses().then(courses => this.setState({ courses: courses}));
    }

    render(){
        return( <>
                <h2>Courses</h2>
                <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {this.state.courses.map( course => {
                    return <tr key={course.id}>
                           <td>{course.title}</td>
                           <td>{course.authorId}</td>
                           <td>{course.category}</td>
                    </tr>
                })}
                </tbody>
                </table>
                </>
        );
    }
}

export default CoursesPage;
*/