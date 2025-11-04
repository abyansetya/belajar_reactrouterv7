import React from "react";
import { Link, Outlet, useLocation } from "react-router";

const aboutLayout = () => {
  const location = useLocation();
  return (
    <main>
      <nav className="flex gap-4 *:text-blue-400">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "underline" : "none"}
        >
          About
        </Link>
        <Link
          to="/about/team"
          className={location.pathname === "/about/team" ? "underline" : "none"}
        >
          About Team
        </Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default aboutLayout;
