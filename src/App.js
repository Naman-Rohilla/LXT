import Navbar from "./components/navbar/navbar";
import "./App.scss";
import Home from "./components/views/home";
import Landing from "./pages/Landing/landing";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
