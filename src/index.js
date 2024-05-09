import "./index.css";
import "./index.css"
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />);