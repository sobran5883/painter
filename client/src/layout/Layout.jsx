import Sidebar from "../components/SideBar";
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        {/* <main className="bg-white w-full">{children}</main> */}
        <Outlet/>
        <Footer/>
      </div>
    </div>
  );
}

export default RootLayout;
