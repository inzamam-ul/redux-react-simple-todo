import { toggled } from "../actions";

const updateTodoStatus = (todoID, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://grumpy-erin-boot.cyclic.app/todos/${todoID}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          completed: !currentStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const todo = await response.json();
    console.log(todo);

    dispatch(toggled(todo._id));
  };
};

export default updateTodoStatus;
