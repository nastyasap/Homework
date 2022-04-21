import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number[]>([value1, 100])

    const onChangeRange = (value: number) => {
        setValue1(value)
        setValue2([value, value2[1]])
    }

    const onChangeDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value)
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRange}
                />
            </div>

            <div className={s.wrapper}>
                <div className={s.numberWrapper}>
                    <span>{value2[0]}</span>
                    <span>{value2[1]}</span>
                </div>
                <SuperDoubleRange
                    value={value2}
                    onChangeDoubleRange={onChangeDoubleRange}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
