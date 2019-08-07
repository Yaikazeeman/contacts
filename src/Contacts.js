import React from 'react';
import './contacts.css';

function Contacts (props) {
    return (
        <tr>
            <td><img className="image" src={props.pictureUrl}></img></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={()=>{props.removeContact(props.index)}}>Remove</button></td>
        </tr>
    )
}

export default Contacts;