import React from "react";
import FormTextInput from "../utils/Form/FormTextInput";
import FormSubmitButton from "../utils/Form/FormSubmitButton";

export default function SearchBar({searchTerm, handleChange, handleClick}) {
    return (
        <div className="row search-bar">
            <div className="col s10">
                <FormTextInput type="text" name="searchTerm" value={searchTerm} label="Search" id="search"
                               handleChange={handleChange} />
            </div>
            <div className="col s2 search-button">
                <FormSubmitButton handleClick={handleClick} />
            </div>
        </div>
    )
}