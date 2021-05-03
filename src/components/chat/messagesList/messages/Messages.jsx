import React from 'react';
import './messages.css';



const Messages = (props) => {
        
    return(
            <li className={props.userId === 1 ? 'manager' : 'user'}>{props.message}</li>
        )
}

export default Messages;