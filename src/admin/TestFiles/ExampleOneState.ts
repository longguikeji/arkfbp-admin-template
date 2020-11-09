import CardState from "../common/Card/CardState";
import FormState from "../common/Form/FormState";

export default interface ExampleOneState extends CardState {
  form: FormState;
}
