import React, {useState, useEffect} from 'react';
import authorStore from '../stores/authorStore';
import courseStore from '../stores/courseStore';
import AuthorList from './AuthorList';
import { Link } from 'react-router-dom';
import { loadAuthors, deleteAuthor } from "../actions/authorActions";
import {loadCourses} from "../actions/courseActions";

function AuthorsPage() {

    const [authors, setAuthors] = useState(authorStore.getAuthors());
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        authorStore.addChangeListener(onChange);
        if(authorStore.getAuthors().length === 0) {
            loadCourses();
            loadAuthors();
        }
        return () => authorStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses());
        setAuthors(authorStore.getAuthors());
    }

    function isAuthorAssociatedToCourse(author) {
        debugger;
       const course = courses.filter((course) => course.authorId === author.id);
       if(course.length === 0)
           return false;
       return true;
    }

    return(
        <>
            <h2>Authors</h2>
            <Link className="btn btn-primary" to="/author">
                Add Author
            </Link>
            <AuthorList authors={authors} isAuthorAssociatedToCourse={isAuthorAssociatedToCourse} deleteAuthor={deleteAuthor}/>
        </>
    );

}

export default AuthorsPage;

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