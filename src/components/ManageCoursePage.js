import React, {useState, useEffect} from 'react';
import CourseForm from './CourseForm';
import courseStore from '../stores/courseStore';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';

const ManageCoursePage = props => {

    const [courses, setCourses] = useState(courseStore.getCourses());
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect( () => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug; // from path '/courses/:slug'
        debugger;
        if(courses.length === 0){
            courseActions.loadCourses();
        }
        else if(slug){
            setCourse(courseStore.getCourseBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);
    },[courses.length, props.match.params.slug]);
    
    function onChange() {
        setCourses(courseStore.getCourses());
    }
    
    function handleChange(event) {
        setCourse({...course, [event.target.name] : event.target.value});
    }

    function isFormValid() {
        const _errors = {};

        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "authorId is required";
        if(!course.category) _errors.category = "category is required";

        setErrors(_errors);

        //Form is valid if the _errors object has no properties.
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        debugger;
        if(!isFormValid()) return;
        courseActions.saveCourse(course).then(
            () => {
                props.history.push("/courses");
                toast.success('Course Saved.');
            });
    }

    return(
      <>
          <h2>Manage Course</h2>
          <CourseForm
              errors={errors}
              course={course}
              onChange={handleChange}
              onSubmit={handleSubmit}
          />
      </>
    );
};

export default ManageCoursePage;