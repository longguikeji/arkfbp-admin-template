import CardState from "../common/Card/CardState";
import TableState from "../common/data/Table/TableState";
import FormState from "../common/Form/FormState";
import PaginationState from "../common/data/Pagination/PaginationState";

export interface YixiFilterState {
  form: FormState;
}

export default interface YixiState extends CardState {
  filter: YixiFilterState;
  table: TableState;
  pagination: PaginationState;
}
