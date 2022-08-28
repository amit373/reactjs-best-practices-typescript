import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="home"> Home</Link>
          </li>
          <li>
            <Link to="/"> Log In</Link>
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
