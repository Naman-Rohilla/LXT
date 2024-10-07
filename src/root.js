import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the nested route components */}
    </>
  );
}

export default Root;
