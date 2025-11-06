import React from "react";
import { Link, Outlet, redirect } from "react-router";
import type { Route } from "./+types/admin-layouts";
import { getSession } from "~/session";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    return redirect("/admin/login");
  }
}

const adminLayoutPage = () => {
  return (
    <main>
      <nav>
        Navbar Admin:
        <Link to="/admin/logout" className="text-red-500">
          Log out
        </Link>
      </nav>

      <Outlet />
    </main>
  );
};

export default adminLayoutPage;
