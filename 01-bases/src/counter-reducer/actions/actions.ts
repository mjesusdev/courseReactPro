export type CounterAction = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

// 1º Way 
// export const doReset = ():CounterAction => {
//     return {
//         type: 'reset'
//     }
// }

export const doReset = ():CounterAction => ({
    type: 'reset'
})

export const doIncreaseBy = (value: number):CounterAction => ({
    type: 'increaseBy', 
    payload: { value }
})