import React from "react";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { animated } from "react-spring";
import { Delete } from "@material-ui/icons";
import { TodoProps } from "./types";
import { useTodos } from "./store";

const Todo: React.FunctionComponent<TodoProps> = ({ item, styleProps }) => {
  const AnimatedListItem = animated(ListItem);
  const { todo, done } = item;
  const { toggleTodo, removeTodo } = useTodos();
  return (
    <AnimatedListItem button style={styleProps}>
      <Checkbox checked={done} onChange={() => toggleTodo(item.key)} />
      <ListItemText primary={todo} />
      <ListItemIcon onClick={() => removeTodo(item.key)}>
        <Delete />
      </ListItemIcon>
    </AnimatedListItem>
  );
};

export default Todo;
