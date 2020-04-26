import dispatcher from "../appDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from './actionTypes';
import {toast} from "react-toastify";

export function loadAuthors() {
    debugger;
    return authorApi.getAuthors().then(authors => {
        //hey dispatcher go tell all stores thta course has been created.
        dispatcher.dispatch({
            actionType : actionTypes.LOAD_AUTHORS,
            authors: authors // shorthand for this is   -->  courses
        });
    });
}

export function saveAuthor(author) {
    return authorApi.saveAuthor(author).then(savedAuthor => {
        //hey dispatcher go tell all stores thta course has been created.
        dispatcher.dispatch({
            actionType : author.id
                ? actionTypes.UPDATE_AUTHOR
                : actionTypes.CREATE_AUTHOR,
            author: savedAuthor
        });
    });
}


export function deleteAuthor(id) {
    debugger;
    return authorApi.deleteAuthor(id).then( () => {
        dispatcher.dispatch({
            actionType : actionTypes.DELETE_AUTHOR,
            id : id
        });
        toast.success('Author Deleted.');
    });
}
