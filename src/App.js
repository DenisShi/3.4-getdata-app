import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import PostsList from "./components/PostList";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

import store from "./reducers/reducer";

function App() {
  return (
    <>
      <Navigation />
      <Provider store={store}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <h1 className="title">
                Task 3.4 Implement requests to get data for all Components
              </h1>
            }
          />
          <Route exact path="/PostsList" element={<PostsList />} />
          <Route exact path="/TodoList" element={<TodoList />} />
          <Route exact path="/UserList" element={<UserList />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
