import React, {useState, useEffect} from 'react';
import AuthorForm from './AuthorForm';
import authorStore from '../stores/authorStore';
import { toast } from 'react-toastify';
import * as authorActions from '../actions/authorActions';

const ManageAuthorPage = props => {

    const [authors, setAuthors] = useState(authorStore.getAuthors());
    const [errors, setErrors] = useState({});
    const [author, setAuthor] = useState({
        id: null,
        slug: "",
        name: ""
    });

    useEffect( () => {
        authorStore.addChangeListener(onChange);
        const slug = props.match.params.slug; // from path '/authors/:slug'
        debugger;
        if(authors.length === 0){
            authorActions.loadAuthors();
        }
        else if(slug){
            setAuthor(authorStore.getAuthorBySlug(slug));
        }
        return () => authorStore.removeChangeListener(onChange);
    },[authors.length, props.match.params.slug]);

    function onChange() {
        setAuthors(authorStore.getAuthors());
    }

    function handleChange(event) {
        setAuthor({...author, [event.target.name] : event.target.value});
    }

    function isFormValid() {
        debugger;
        const _errors = {};

        if(!author.name) _errors.name = "Name is required";

        setErrors(_errors);

        //Form is valid if the _errors object has no properties.
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        debugger;
        if(!isFormValid()) return;
        authorActions.saveAuthor(author).then(
            () => {
                props.history.push("/authors");
                toast.success('Author Saved.');
            });
    }

    return(
        <>
            <h2>Manage Author</h2>
            <AuthorForm
                errors={errors}
                author={author}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default ManageAuthorPage;