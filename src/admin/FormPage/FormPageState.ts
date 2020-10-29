import CardState from '../common/Card/CardState'
import FormState from '../common/Form/FormState'

export default interface FromPageState extends CardState {
  form:FormState
}
