/* eslint-disable @typescript-eslint/no-explicit-any */
import { Home, User, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAppSelector } from "@/lib/redux/hooks";
import { NavLink, useLocation } from "react-router-dom";
import type { UserRole } from "@/lib/redux/features/auth/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logout from "../../common/logout";

const items: { title: string; url: string; icon: any; roles: UserRole[] }[] = [
  // { title: "Home", url: "/", icon: Home, roles: ["user", "admin"] },
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    roles: ["admin", "user"],
  },
  {
    title: "User Management",
    url: "/manage-users",
    icon: Users,
    roles: ["admin", "user"],
  },
  {
    title: "Payments & Revenue",
    url: "/payments-revenue",
    icon: User,
    roles: ["admin", "user"],
  },
  {
    title: "Doctor Appointment",
    url: "/doctor-appointment",
    icon: User,
    roles: ["admin", "user"],
  },
  {
    title: "Doctor List",
    url: "/doctors",
    icon: User,
    roles: ["admin", "user"],
  },
  {
    title: "Upload",
    url: "/upload",
    icon: User,
    roles: ["admin", "user"],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: User,
    roles: ["admin", "user"],
  },
];

const AppSidebar = () => {
  const location = useLocation().pathname;

  const user = useAppSelector((state) => state.auth.user);
  console.log(user?.user_email);
  const filteredItems = items.filter((item) =>
    item.roles.includes(user?.user_role as UserRole),
  );

  return (
    <Sidebar>
      <SidebarContent className="flex flex-col">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={` text-user-filter-default h-12 ${
                      item.url === location
                        ? "bg-[#FFF7ED] text-app-base-color"
                        : ""
                    } hover:bg-[#FFF7ED] hover:text-app-base-color`}
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="flex gap-2 p-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-1 ">
          <span className="font-medium ">{user?.user_email}</span>
          <div className="flex gap-3">
            <span className="text-sm  text-[#6A7282] ">{user?.user_role}</span>{" "}
            <Logout></Logout>
          </div>
        </div>
        <div></div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
