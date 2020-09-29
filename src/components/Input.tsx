import { makeStyles, TextField, Button } from "@material-ui/core";
import React from "react";

interface Props {
  addTodo: Function;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 0,
  },
});

const Input: React.FC<Props> = ({ addTodo }) => {
  const classes = useStyles();
  const todoRef = React.useRef<any>(null);

  const handleFormEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoRef.current.value) {
      addTodo(todoRef.current.value);
      todoRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleFormEvent} noValidate autoComplete="off">
      <TextField
        inputRef={todoRef}
        className={classes.root}
        id="standard-basic"
        label="Get Milk, Eggs, Bread ect."
      />
      <Button
        type="submit"
        className={classes.root}
        variant="contained"
        color="primary"
      >
        Primary
      </Button>
    </form>
  );
};

export default Input;
