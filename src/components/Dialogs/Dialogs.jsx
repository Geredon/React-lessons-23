import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Egor"},
        {id: 2, name: "Lex"},
        {id: 3, name: "Oleg"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Victor"},
        {id: 7, name: "Alex"},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is you?"},
        {id: 3, message: "Welcome"},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messagesData.map(messages => <Message message={messages.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;