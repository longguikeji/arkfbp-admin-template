import { debug } from 'console';
import { omit } from 'lodash'
export default function ChangeOptions(data: any) {
  if (data === null) {
    return
  }
  data.forEach((option: any, index: number) => {
    option.value = option.id;
    option.label = option.title;
    // data[index] = omit(option, 'id', 'title');
  });
}