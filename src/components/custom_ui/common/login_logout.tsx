import { Button } from "@/components/ui/button";
import { clear_auth } from "@/lib/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { cookie } from "@/utils/cookies";
import { Link } from "react-router-dom";

const LoginLogout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const handleLogout = () => {
    cookie.removeToken();
    dispatch(clear_auth());
  };

  return (
    <div className="flex gap-4">
      {token ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Link to={"/login"}>
          {" "}
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
};

export default LoginLogout;
