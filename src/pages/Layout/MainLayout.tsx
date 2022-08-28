import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="home"> Home</Link>
          </li>
          <li>
            <Link to="login"> Log In</Link>
          </li>
          <li>
            <Link to="signup"> Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
