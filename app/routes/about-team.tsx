import React from "react";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Team" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const aboutTeamPage = () => {
  return <div>aboutTeamPage</div>;
};

export default aboutTeamPage;
