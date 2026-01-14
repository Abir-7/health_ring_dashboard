/* eslint-disable react-hooks/exhaustive-deps */
import {
  clear_auth,
  set_auth,
  set_is_loading,
} from "@/lib/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { cookie } from "@/utils/cookies";
import { decodeToken } from "@/utils/jwt";
import { useEffect, type ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { is_loading } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(set_is_loading(true));
    const token = cookie.getToken();

    if (token) {
      const decoded = decodeToken(token);
      const { user_id, user_email, user_role } = decoded || {};

      if (user_id && user_email && user_role) {
        dispatch(
          set_auth({
            token,
            user: { user_id, user_email, user_role },
          })
        );
        dispatch(set_is_loading(false));
        return;
      }
    }

    dispatch(clear_auth());
    dispatch(set_is_loading(false));
  }, []);

  if (is_loading) {
    return <></>;
  }

  return <>{children}</>;
};

export default AuthProvider;
