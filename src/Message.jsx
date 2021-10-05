import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, user }, ref) => {
    const isUser = user === message.username;
    return (
        <div ref={ref} className={`message ${isUser && "message__user"}`}>
            <Card
                className={isUser ? "message__userCard" : "message__guestCard"}
            >
                <CardContent className="message__content">
                    <Typography variant="h5" component="h2">
                        <span>
                            {!isUser &&
                                `${
                                    message.username || "Usuario Desconocido"
                                }: `}{" "}
                        </span>
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
});

export default Message;
