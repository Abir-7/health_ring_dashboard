import { USERS_MOCK } from "@/demo/user_manage";
import type {
  TGetUsersReq,
  TGetUsersRes,
  TUser,
} from "@/types/res/get_all_users";
import { useQuery } from "@tanstack/react-query";

/** Helper to check if filter value is empty (undefined or empty string) */
function isEmpty<T>(val?: T | ""): val is undefined | "" {
  return val === undefined || val === "";
}

export function useGetAllUsersQuery(filters?: TGetUsersReq) {
  return useQuery<TGetUsersRes, Error>({
    queryKey: ["users", filters],
    queryFn: async () => {
      // simulate network latency
      await new Promise((r) => setTimeout(r, 300));

      const data = [...USERS_MOCK] as TUser[];

      // filter logic
      const filtered = data.filter((user) => {
        const matchStatus = isEmpty(filters?.account_status)
          ? true
          : user.status === filters?.account_status;

        const matchSubscription = isEmpty(filters?.subscription_type)
          ? true
          : user.subscription === filters?.subscription_type;

        const matchSearch =
          !filters?.search || filters.search.trim() === ""
            ? true
            : user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
              user.email.toLowerCase().includes(filters.search.toLowerCase());

        return matchStatus && matchSubscription && matchSearch;
      });

      // Pagination
      const page = filters?.page ?? 1;
      const limit = filters?.limit ?? 10;
      const start = (page - 1) * limit;

      return {
        data: filtered.slice(start, start + limit),
        meta: {
          total: filtered.length,
          page,
          limit,
        },
      };
    },
  });
}
