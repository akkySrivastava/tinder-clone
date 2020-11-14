import React, { useState } from 'react'
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar"

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Akky", 
            image: "https://avatars3.githubusercontent.com/u/56448109?…60&u=9d61a9b3043e3bf44a3c9015d2ddf254ed3aae80&v=4",
            message: "I'm at my coding studio"
        },
        {
            name: "Akky", 
            image: "https://avatars3.githubusercontent.com/u/56448109?…60&u=9d61a9b3043e3bf44a3c9015d2ddf254ed3aae80&v=4",
            message: "Doing crazy stuffs. What about you?"
        },
        {
            message: "Oh! Keep care of your health."
        }
        

    ]);
    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message : input}])
        setInput("");
    }
    return (
        <div className = "chatScreen">
            <p className = "chatScreen__template">
                YOU MATCHED WITH AKKY ON 14/11/2020
            </p>
            
            {messages.map((message) => (
                message.name ? (
                    <div className = "chatScreen__message">
                    <Avatar 
                        className = "chatScreen__image" 
                        alt = {message.name} 
                        src = {message.image} 
                    />
                    <p className = "chatScreen__text">
                        {message.message}
                    </p>
                </div>
                ) :
                <div className = "chatScreen__message">
                 <p className = "chatScreen__textUser">
                    {message.message}
            </p>
            </div>
                
            ))}

           
                <form class = "chatScreen__input">
                    <input 
                        value = {input}
                        onChange = { e => setInput(e.target.value)}
                        className = "chatScreen__inputField"
                        type = "text" 
                        placeholder = "Type a message..."/>
                    <button
                        type = "submit"
                        onClick = { handleSend } 
                        className = "chatScreen__button">
                            SEND
                    </button>
                </form>
            
        </div>
    )
}

export default ChatScreen
