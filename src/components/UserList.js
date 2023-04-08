import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../reducers/usersSlice";
import { selectAllUsers } from "../reducers/reducer";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers).slice(0, 10);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Todo</h1>
      {users.map((user) => {
        return (
          <div key={user.id} className="userList">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default UserList;
