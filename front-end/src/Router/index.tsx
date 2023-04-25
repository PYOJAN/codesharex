import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error/Error-404";
import Editor from "../pages/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/:roomId",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "editor/:roomId",
    element: <Editor />,
  },
]);

export default router;
