import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink className={style.link} to={path}> {props.img} {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem img={dialog.imgDialogs} name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = props.messages.map(messages => <Message message={messages.message} key={messages.id}/>)

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