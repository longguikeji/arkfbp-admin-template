import RadioButtonState from "./RadioButtonState";
import RadioState from "./RadioState";
export default interface RadioGroupState {
  type: string;
  value: string | number | boolean;
  size: string;
  disabled: boolean;
  textColor: string;
  fill: string;
  radio: RadioState;
  radioButton: RadioButtonState;
}
