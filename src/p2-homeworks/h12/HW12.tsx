import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some', 'brown', 'blue'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.changeTheme.theme) // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>
            <SuperSelect options={themes} value={theme} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
