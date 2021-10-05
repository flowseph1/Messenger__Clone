import { FormControl, IconButton, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./Firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState("");

    const form = useRef(null);

    useEffect(() => {
        db.collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => {
                setMessages(
                    snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
                );
            });
    }, []);

    useEffect(() => {
        form.current.scrollTop = form.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        setUser(prompt("Por favor Ingrese su nombre"));
    }, []);

    const sendMessage = e => {
        e.preventDefault();

        db.collection("messages").add({
            message: input,
            username: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className="App">
            <div className="app__header">
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
                    alt=""
                />
                <h1>Messenger App 🍩 </h1>
                <h2>
                    <span>Welcome</span>
                    &nbsp; 😎 &nbsp;
                    {user}
                </h2>
            </div>
            <div className="app__messages" ref={form}>
                <FlipMove>
                    {messages.map(message => (
                        <Message
                            key={message.id}
                            user={user}
                            message={message.data}
                        />
                    ))}
                </FlipMove>
            </div>
            <form className="app__form">
                <FormControl className="app__formControl">
                    <Input
                        placeholder="Ingrese un mensaje"
                        className="app__input"
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        spellCheck="false"
                    />
                    <IconButton
                        className="app__iconButton"
                        disabled={!input}
                        variant="contained"
                        color="primary"
                        onClick={sendMessage}
                        type="submit"
                    >
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>
        </div>
    );
}

export default App;
