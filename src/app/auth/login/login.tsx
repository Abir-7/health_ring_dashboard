"use client";

import { SubmitButton } from "@/components/custom_ui/common/form/rhf_button";
import { RHFForm } from "@/components/custom_ui/common/form/rhf_form";
import { RHFInput } from "@/components/custom_ui/common/form/rhf_input";
import { cookie } from "@/utils/cookies";
import { useAppDispatch } from "@/lib/redux/hooks";

import { loginSchema } from "@/schema/zod/login.schema";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { clear_auth, set_auth } from "@/lib/redux/features/auth/authSlice";
import { decodeToken } from "@/utils/jwt";
import { useLoginMutation } from "@/react_query_hook/mutations/login.mutation";
import ring from "../../../assets/image/ring.png";
import logo from "../../../assets/image/logo.png";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || "/";

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        if (data && data.access_token) {
          if (data.role === "guest") {
            toast.error("Unauthorized User");
            dispatch(clear_auth());
          } else {
            const decoded = decodeToken(data.access_token);
            if (decoded) {
              dispatch(
                set_auth({
                  token: data.access_token,
                  user: {
                    user_id: decoded?.user_id,
                    user_email: decoded.user_email,
                    user_role: decoded.user_role,
                  },
                })
              );
              cookie.setToken(data.access_token);
              toast.success("Login success");
              navigate(from, { replace: true });
            }
          }
        }
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row  items-center p-4 md:p-0 gap-8 md:gap-16 bg-gray-50 dark:bg-gray-900">
      {/* Left side image */}
      <div className="flex justify-center  items-center w-full md:w-1/2">
        <img
          src={ring}
          alt="ring"
          className="w-2/3 md:w-auto max-w-xs md:max-w-md"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/3 p-6 shadow rounded-md border  ">
        <img src={logo} width={100} alt="" className="mx-auto my-6" />
        <p className="text-[18px] text-center mb-6 text-app-base-color">
          Welcome Back!
        </p>
        <p className="text-[18px] text-center mb-10 text-user-filter-option">
          Enter your email and password to access your account.
        </p>
        <RHFForm
          schema={loginSchema}
          defaultValues={{ email: "dev.abir.07@gmail.com", password: "123456" }}
          onSubmit={handleLogin}
          className=""
        >
          <RHFInput
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
          />
          <RHFInput
            name="password"
            label="Password"
            type="password"
            placeholder="••••••"
          />

          <SubmitButton className="w-full bg-app-base-color">
            Continue
          </SubmitButton>
        </RHFForm>
      </div>
    </div>
  );
};

export default LoginPage;
