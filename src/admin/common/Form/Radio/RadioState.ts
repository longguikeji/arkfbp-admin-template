export default interface RadioState {
  value: string | number | boolean;
  label: string | number | boolean;
  disabled: boolean;
  border: boolean;
  size: string;
  name: string;
  readonly: boolean;
}
