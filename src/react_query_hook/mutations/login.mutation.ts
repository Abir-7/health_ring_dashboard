import type { TLoginReq } from "@/types/req/login.req";
import type { TloginRes } from "@/types/res/login.res";
import { useMutation } from "@tanstack/react-query";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (data: TLoginReq) => {
      console.log(data);

      return {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2VtYWlsIjoiZGV2LmFiaXIuMDdAZ21haWwuY29tIiwidXNlcl9pZCI6IjQzYTRhMzBjLWFkN2MtNDU5Ni1iYjQ2LTRhMzEzMDAyNzI3YiIsInVzZXJfcm9sZSI6InVzZXIiLCJpYXQiOjE3NjE3MTM3MTEsImV4cCI6MTc2MTcxNDYxMX0.Jn1UDqXTLwLHw1v5SzWuk9gWFZMGbsNeVmG6FfeKd_Q",
        id: "43a4a30c-ad7c-4596-bb46-4a313002727b",
        email: "email",
        role: "user",
      } as TloginRes;
    },
  });
}
