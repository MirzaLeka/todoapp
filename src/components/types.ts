export type Todo = {
  todo: string;
  done: boolean;
  key: number;
};

export interface TodoProps {
  item: Todo;
  styleProps: any;
}
