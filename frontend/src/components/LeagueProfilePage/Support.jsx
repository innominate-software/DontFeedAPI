import React from "react";
import Contact from "./Contact";

export default function Support({contacts, rules}) {
    const leagueContacts = contacts.map((contact, index) => <Contact key={index} contact={contact} />);
    return (
        <div id="support" className="col s12">
            {/*contacts*/}
            <div className="card df-dark-background df-light-grey-text support">
                <div className="card-content">
                    <div className="row contact-top-row">
                        <div className="col s4"><h5>Name</h5></div>
                        <div className="col s4"><h5>Job</h5></div>
                        <div className="col s4"><h5>Contact</h5></div>
                    </div>
                    <hr />
                    <div className="row contact">
                        {leagueContacts}
                    </div>
                </div>
            </div>
            {/*rules*/}
            <div className="card df-dark-background df-light-grey-text support">
                <div className="card-content">
                    <span className="card-title"><h5>Rules</h5></span>
                    <p>{rules}</p>
                </div>
            </div>
        </div>
    )
}