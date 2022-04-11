import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preloader from './bll/preloader.gif'
import {AppStoreType} from "./bll/store"
import {loadingAC, loadingPropsType} from "./bll/loadingReducer"
import s from "./HW10.module.css"

function HW10() {
    const loadingState = useSelector<AppStoreType, loadingPropsType>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
    };

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 10

            {loadingState.loading
                ? (
                    <div><img className={s.preloader} src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
