import { Outlet } from "react-router-dom";
import { SideBar } from "../component/SideBar";
import { TopBar } from "../component/TopBar";
import { Footer } from "../component/Footer";
import "./App.css";

export const Layout = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};