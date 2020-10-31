export type Todo = {
  todo: string;
  done: boolean;
  key: string;
};

export interface TodoProps {
  item: Todo;
  styleProps: any;
}
