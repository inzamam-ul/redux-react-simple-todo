import { loadTodos } from "../actions";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch("https://grumpy-erin-boot.cyclic.app/todos");
  const todos = await response.json();

  dispatch(loadTodos(todos));
};

export default fetchTodos;

// https://grumpy-erin-boot.cyclic.app
