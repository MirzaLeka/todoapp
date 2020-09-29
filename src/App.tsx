import React from "react";
import { useSpring, animated } from "react-spring";
import TodoApp from "./components/TodoApp";
import { Container } from "@material-ui/core";

function App() {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={animationProps}>
      <Container maxWidth="sm">
        <TodoApp />
      </Container>
    </animated.div>
  );
}

export default App;
