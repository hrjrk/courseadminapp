import React from 'react';
import PropTypes from 'prop-types';
import authorStore from "../../stores/authorStore";

function SelectInput(props) {
    debugger;
    let wrapperClass = "form-group";
    if(props.error.length > 0){
        wrapperClass += " has-error";
    }
    return(
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <select
                    id={props.id}
                    onChange={props.onChange}
                    name={props.name}
                    className="form-control"
                    value={props.value}
                >
                    <option value="" />
                    {authorStore.getAuthors().map((author) => <option key={author.id} value={author.id}> {author.name} </option>)}
                </select>
            </div>
            {props.error && (
                <div className="alert alert-danger">{props.error}</div>
            )}
        </div>
    );
}

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

SelectInput.defaultProps = {
    error: ""
};

export default SelectInput;