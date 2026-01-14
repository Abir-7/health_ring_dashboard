import { clear_auth } from "@/lib/redux/features/auth/authSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { cookie } from "@/utils/cookies";
import { CiLogin } from "react-icons/ci";

const Logout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    cookie.removeToken();
    dispatch(clear_auth());
  };

  return (
    <div>
      <CiLogin size={20} onClick={handleLogout} />
    </div>
  );
};

export default Logout;
