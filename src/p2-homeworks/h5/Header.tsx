import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const headerClassName = `${s.header} ${isOpen ? s.headerActive : ""}`

    return (
        <div className={headerClassName}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            <button className={s.button} onClick={toggle}>
                {!isOpen ? "Show menu" : "Hide menu"}
            </button>
        </div>
    )
}

export default Header
