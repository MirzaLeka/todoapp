import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";
import Input from "./Input";
import { useTodos } from "./store";
import { Transition } from "react-spring/renderprops";

const TodoApp = () => {
  const { todos, addTodo } = useTodos();
  return (
    <div>
      <Input addTodo={addTodo} />
      <List component="nav" aria-label="main mailbox folders">
        <Transition
          items={todos}
          keys={(item) => item.key}
          initial={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          from={{ transform: "translate3d(-100vw,0,0)", opacity: 0 }}
          enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
          leave={{ transform: "translate3d(100vw,0,0)", opacity: 0 }}
        >
          {(item) => (props) => <Todo item={item} styleProps={props} />}
        </Transition>
      </List>
    </div>
  );
};

export default TodoApp;
