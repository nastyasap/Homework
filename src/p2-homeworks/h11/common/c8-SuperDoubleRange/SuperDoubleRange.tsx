import {Slider} from '@mui/material'
import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeDoubleRange: (value: number[]) => void
    value: number[]
}

function valuetext(value: number) {
    return `${value}°C`;
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange, value,
        ...restProps
    }
) => {


    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeDoubleRange(newValue as number[]);
    };
    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </>
    )
}

export default SuperDoubleRange
