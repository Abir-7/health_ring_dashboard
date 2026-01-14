import { useAppSelector } from "@/lib/redux/hooks";
import type { UserRole } from "@/lib/redux/features/auth/authSlice";
import Unauthorized from "@/app/unauthorized";
import { Navigate } from "react-router-dom";

interface CheckRoleProps {
  children: React.ReactNode;
  role: UserRole | UserRole[];
}

const CheckRole = ({ children, role }: CheckRoleProps) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  const allowedRoles = Array.isArray(role) ? role : [role];

  if (allowedRoles.includes(user.user_role as UserRole)) {
    return <>{children}</>;
  }

  return <Unauthorized />;
};

export default CheckRole;
