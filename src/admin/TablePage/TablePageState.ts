import CardState from "../common/Card/CardState";
import TableState from "../common/data/Table/TableState";
import FormState from "../common/Form/FormState";
import PaginationState from "../common/data/Pagination/PaginationState";

export interface TablePageFilterState {
  form: FormState;
}

export default interface TablePageState extends CardState {
  filter: TablePageFilterState;
  table: TableState;
  pagination: PaginationState;
}
