import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from './actionTypes';
import {toast} from "react-toastify";

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        //hey dispatcher go tell all stores thta course has been created.
     dispatcher.dispatch({
         actionType : course.id
             ? actionTypes.UPDATE_COURSE
             : actionTypes.CREATE_COURSE,
         course: savedCourse
     });
    });
}

export function loadCourses() {
    debugger;
    return courseApi.getCourses().then(courses => {
        //hey dispatcher go tell all stores thta course has been created.
        dispatcher.dispatch({
            actionType : actionTypes.LOAD_COURSES,
            courses: courses // shorthand for this is   -->  courses
        });
    });
}

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then( () => {
        dispatcher.dispatch({
            actionType : actionTypes.DELETE_COURSE,
            id : id
        });
        toast.success('Course Deleted.');
    });
}