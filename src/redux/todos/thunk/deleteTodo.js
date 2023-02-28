import { deleted } from "../actions";

const deleteTodo = (todoID) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://grumpy-erin-boot.cyclic.app/todos/${todoID}`,
      {
        method: "DELETE",
      }
    );

    const todo = await res.json();

    console.log(todo);

    dispatch(deleted(todoID));
  };
};

export default deleteTodo;
