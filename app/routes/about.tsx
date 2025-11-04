import React from "react";
import { Outlet } from "react-router";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const about = () => {
  return (
    <>
      <h1>about page</h1>
      <Outlet />{" "}
    </>
  );
};

export default about;
