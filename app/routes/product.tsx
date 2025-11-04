import React from "react";
//type untuk params
import type { Route } from "../+types/root";

const product = ({ params }: Route.ComponentProps) => {
  console.log(params.pid);
  return (
    <section>
      <h1>Product Page</h1>
      <p>Product ID: {params.pid}</p>
    </section>
  );
};

export default product;
