import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTickImg from "../assets/images/double-tick.png";
import noteImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";
const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    e.target.reset();
  };

  const handleCompleteAll = () => {
    dispatch(allCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAll}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompleted} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
