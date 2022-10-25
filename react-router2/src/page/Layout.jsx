import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <br />
      <Outlet />
    </div>
  );
}

export default Layout;