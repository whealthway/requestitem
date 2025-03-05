import { createBrowserRouter } from "react-router-dom";
import ItemRequest from "../pages/itemrequest/ItemRequest";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/item-request-form",
        element: <ItemRequest />,
      },
      {
        path: "/item-request/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
