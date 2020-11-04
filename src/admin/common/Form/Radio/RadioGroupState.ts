export default interface RadioGroupState{
  type: string;
  value: string | number | boolean;
  size: string;
  disabled: boolean;
  textColor: string;
  fill: string;
  radio: Array<any>;
  radioButton: Array<any>;
}
