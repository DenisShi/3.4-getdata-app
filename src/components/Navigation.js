import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/PostsList">PostsList</Link>
        </li>
        <li>
          <Link to="/TodoList">TodoList</Link>
        </li>
        <li>
          <Link to="/UserList">UserList</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
