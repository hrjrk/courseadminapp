import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";

function AuthorList(props) {
    debugger;
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Author Name</th>
            </tr>
            </thead>
            <tbody>
            {props.authors.map( author => {
                return <tr key={author.id}>
                    <td>
                        <button className="btn btn-outline-danger" onClick={() => {
                            if(!(props.isAuthorAssociatedToCourse(author))){
                                props.deleteAuthor(author.id)
                            }
                            else{
                                toast.error("Course Associated to Author!");
                            }
                        }
                        }>
                            Delete
                        </button>
                    </td>
                    <td>
                        <Link to={"/author/" + author.name}>{author.name}</Link>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    );
}

AuthorList.propTypes = {
        isAuthorAssociatedToCourse: PropTypes.func.isRequired,
        deleteAuthor: PropTypes.func.isRequired,
        authors: PropTypes.arrayOf(PropTypes.shape({   //each obj in array must have these props
    })).isRequired
};

AuthorList.defaultProps = {
    authors: []
};
export default AuthorList;