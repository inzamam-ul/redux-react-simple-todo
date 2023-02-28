import { colorSelected } from "../actions";

const updateTodoColor = (todoID, color) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://grumpy-erin-boot.cyclic.app/todos/${todoID}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          color: color,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const todo = await response.json();

    dispatch(colorSelected(todo._id, todo.color));
  };
};

export default updateTodoColor;
