import React from "react";

export default function ContactCard({name, contact}) {
    console.log(contact)
    return (
        <div>
            <a className="modal-trigger" href={"#contactCard" + name}><h5>Contact Card</h5></a>

            <div id={"contactCard" + name} className="modal">
                <div className="modal-content contact-card-modal">
                    {contact.phone ? <div><div className="left">Phone:</div><div>{contact.phone}</div></div> : null}
                    {contact.email ? <div><div className="left">Email:</div><div><a href={"mailto:" + contact.email}>{contact.email}</a></div></div> : null}
                    {contact.facebook ? <div><div className="left">Facebook:</div><div><a href={"https://www.facebook.com" + contact.facebook} target="_blank" rel="noopener noreferrer">{contact.facebook}</a></div></div> : null}
                    {contact.discord ? <div><div className="left">Discord:</div><div>{contact.discord}</div></div> : null}
                    {/*{modalContacts}*/}
                </div>
            </div>
        </div>
    )
}