import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("about", [
    layout("layouts/about-layout.tsx", [
      index("routes/about.tsx"),
      route("team", "routes/about-team.tsx"),
    ]),
  ]),
  route("product/:pid", "routes/product.tsx"),
  route("products", "routes/products.tsx"),
  ...prefix("admin", [
    route("products/create", "routes/admin/products-create.tsx"),
  ]),
] satisfies RouteConfig;

//route("product/:pid" => routes path, "routes/product.tsx" => routes module)
