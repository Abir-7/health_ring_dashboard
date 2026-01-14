import { NavLink } from "react-router-dom";
import LoginLogout from "./login_logout";
import { useAppSelector } from "@/lib/redux/hooks";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);

  // common class for links
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 rounded ${isActive ? "bg-gray-200 " : " hover:bg-gray-200"}`;

  return (
    <div className="flex h-full items-center justify-between px-5 bg-gray-50">
      <div className="font-bold text-xl">Logo</div>

      <div className="flex gap-3">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={linkClass}>
          Products
        </NavLink>
        {user && (
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        )}
      </div>

      <div>
        <LoginLogout />
      </div>
    </div>
  );
};

export default Navbar;
