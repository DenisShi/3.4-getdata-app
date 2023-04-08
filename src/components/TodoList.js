import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "../reducers/todoSlice";
import { selectAllTodos } from "../reducers/reducer";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos).slice(0, 10);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Todo</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todoList">
            <h2>
              {todo.title} {todo.id}
            </h2>
            <p>{todo.description}</p>
            <p>{todo.completed ? "completed" : null}</p>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
