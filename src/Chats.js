import React from 'react'
import "./Chats.css"
import Chat from './Chat'

function Chats() {
    return (
        <div className = "chats">
            <Chat 
                name = "Akky"
                message = "Damn!! Where are you man"
                timestamp = "40 seconds ago"
                profilePic = "https://avatars3.githubusercontent.com/u/56448109?…60&u=9d61a9b3043e3bf44a3c9015d2ddf254ed3aae80&v=4"
            />
            <Chat 
                name = "Dakota"
                message = "Let's Meet tonight"
                timestamp = "59 seconds ago"
                profilePic = "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/91…a&oh=eaac158e44f5fe6087c20bcaa270d3dd&oe=5FD760FD"
            />
            <Chat 
                name = "Ananya"
                message = "Show me your talent"
                timestamp = "4 hours ago"
                profilePic = "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/77…a&oh=a4a75f9a84bbe7e65459e9a1f9d8dadb&oe=5FD61CA7"
            />
            <Chat 
                name = "Elon"
                message = "Give me a ticket to Mars"
                timestamp = "8 hours ago"
                profilePic = "https://i.pinimg.com/originals/18/fd/64/18fd644e9cdf81ab785d606584a384fb.jpg"
            />
            <Chat 
                name = "Pulkit"
                message = "How's your internship going on??"
                timestamp = "1 day ago"
                profilePic = "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/76…a&oh=7c4efc8aa8e05e5a06d1f6a242e7b42d&oe=5FD5F615"
            />
            <Chat 
                name = "Arvind"
                message = "How's you Python stuffs going on??"
                timestamp = "4 days ago"
                profilePic = "https://scontent.fpat2-2.fna.fbcdn.net/v/t31.0-8/1…a&oh=ddff82f9d05b1aab6e330e9bd08119da&oe=5FD4BE15"
            />

        </div>
    )
}

export default Chats
