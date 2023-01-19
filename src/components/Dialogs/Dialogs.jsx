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
    return(
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Egor" id="1"/>
                <DialogItem name="Lex" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Valera" id="5"/>
                <DialogItem name="Victor" id="6"/>
                <DialogItem name="Egor" id="7"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi"/>
                <Message message="How is you?"/>
                <Message message="Welcome"/>
            </div>
        </div>
    )
}

export default Dialogs;