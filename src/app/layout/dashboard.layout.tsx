import AppSidebar from "@/components/custom_ui/dashboard/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full">
        <div className="h-14 border-b">
          <SidebarTrigger />
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
