import { RouterProvider } from "react-router";
import { router } from "./routes.ts";

export default function App() {
  return <RouterProvider router={router} />;
}