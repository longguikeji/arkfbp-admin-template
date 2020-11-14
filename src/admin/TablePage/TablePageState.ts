import CardState from "../common/Card/CardState";
import TableState from "../common/data/Table/TableState";
import FormState from "../common/Form/FormState";
import PaginationState from "../common/data/Pagination/PaginationState";

export default interface TablePageState extends CardState {
  filter: FormState;
  table: TableState;
  pagination: PaginationState;
}
