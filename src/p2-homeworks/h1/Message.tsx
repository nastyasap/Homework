import React from 'react'
import styles from './Message.module.css'
type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={styles.message}>
            <img src={props.avatar} alt='Avatar'/>
            <div className={styles.text}>
                <div className={styles.name}>{props.name}</div>
                <p>{props.message}</p>
                <span className={styles.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
