import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Movie from "./components/movie/movie";
import Landing from "./pages/Landing/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // This is your main layout
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
