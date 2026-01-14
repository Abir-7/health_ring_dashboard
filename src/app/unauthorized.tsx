import { clear_auth } from "@/lib/redux/features/auth/authSlice";
import { cookie } from "@/utils/cookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // Optional: redirect to login or home after 2 seconds
    const timer = setTimeout(() => {
      cookie.removeToken();
      dispatch(clear_auth());
      navigate("/", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Unauthorized</h1>
      <p className="text-gray-600">
        You don’t have permission to view this page.
      </p>
      <p className="text-gray-500 mt-2">Redirecting...</p>
    </div>
  );
};

export default Unauthorized;
