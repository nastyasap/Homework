import React from 'react'
import { UserType } from '../../HW8'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState[2].name).toBe('Дмитрий')
    expect(newState[3].name).toBe('Ирина')
    expect(newState[4].name).toBe('Коля')
    expect(newState[5].name).toBe('Кот')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState.length).toBe(6)
    expect(newState[5].name).toBe('Александр')
    expect(newState[4].name).toBe('Виктор')
    expect(newState[3].name).toBe('Дмитрий')
    expect(newState[2].name).toBe('Ирина')
    expect(newState[1].name).toBe('Коля')
    expect(newState[0].name).toBe('Кот')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4)
    expect(newState[0].age).toBe(66)
    expect(newState[1].age).toBe(55)
    expect(newState[2].age).toBe(44)
    expect(newState[3].age).toBe(40)

})
