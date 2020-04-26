import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import SelectInput from './common/SelectInput';

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                label="Title"
                onChange={props.onChange}
                name="title"
                value={props.course.title}
                error={props.errors.title}
            />

            <SelectInput
                id="author"
                label="Author"
                name="authorId"
                onChange={props.onChange}
                value={props.course.authorId || ""}
                error={props.errors.authorId}
            />

            <TextInput
                id="category"
                label="Category"
                onChange={props.onChange}
                name="category"
                value={props.course.category}
                error={props.errors.category}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default CourseForm;