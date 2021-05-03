import React from 'react';
import './App.css';
import chat from './components/assets/chat.svg';
import AuthContainer from './components/auth/AuthContainer';

const App = (props) => {
  return (
      <div>
        {props.isChatOpen ? <AuthContainer isChatOpen = {props.isChatOpen} closeChat = {props.closeChat} /> : <button onClick={props.openChat} className="chat-open-btn"> <img src={chat} alt='OpenChat'/> </button>}
      </div>
    )
  }

export default App;
