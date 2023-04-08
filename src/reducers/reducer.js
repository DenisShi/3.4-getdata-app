import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice";
import todoSlice from "./todoSlice";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
  posts: postsSlice,
  todos: todoSlice,
  users: usersSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectAllTodos = (state) => state.todos.todos;
export const selectAllUsers = (state) => state.users.users;

export default store;
