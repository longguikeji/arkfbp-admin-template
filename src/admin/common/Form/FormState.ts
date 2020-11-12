import FormItemState from "./FormItem/FormItemState";

export interface FormItemStateArray {
  [index: number]: FormItemState;
}

export default interface FormState {
  items: [FormItemState | FormItemStateArray];

  values: object;
  inline?: boolean;
  size?: string;
  disabled?: boolean;
  labelPosition?: string;
  labelWidth?: string;
  labelSuffix?: string;
}
