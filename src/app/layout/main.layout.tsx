import Navbar from "@/components/custom_ui/common/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col   min-h-screen ">
      <div className="h-14 border-b">
        <Navbar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="h-16 border-t">Footer</div>
    </div>
  );
};

export default MainLayout;
