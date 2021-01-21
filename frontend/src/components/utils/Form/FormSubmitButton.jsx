import React from "react";

export default function FormSubmitButton({handleClick}) {
    return(
        <button className="grey-btn btn right" onClick={handleClick}><i className="material-icons right">chevron_right</i>NEXT</button>
    )
}