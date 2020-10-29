import FormItemState from './FormItem/FormItemState'

export interface FormItemStateArray {
    [index:number]:FormItemState
}

export default interface FormState {
    items: [FormItemState | FormItemStateArray]

    inline: boolean
}
