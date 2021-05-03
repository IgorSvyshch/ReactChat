import React from 'react';
import './SendMessage.css';
import btn from '../../assets/sendForm.svg'



const SendMessage = (props) => {

    const newMessageText = React.createRef();

    const addMessage = () => {
        return (
        props.newMessageText === "" ?  '' : props.addMessage()
        )
   }

    const onMessageChange = () => {
        let message = newMessageText.current.value;
        props.updateMessage(message);
    }

    return(
        <div className = 'send-form'>
            <textarea onChange={onMessageChange} 
                ref={newMessageText}
                value={props.newMessageText} 
                className = 'send-form-input' 
                type="text" 
                placeholder="Write to us" 
            />
            <button onClick={addMessage} className = 'send-form-btn'><img src={btn} alt="button"/> </button>
        </div>
    )
}

export default SendMessage;