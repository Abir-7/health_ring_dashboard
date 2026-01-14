import { useQuery } from "@tanstack/react-query";
import type { TUserOverview } from "@/types/res/get_all_users";
import { USERS_MOCK } from "@/demo/user_manage";

export function useGetUserOverview() {
  return useQuery<TUserOverview, Error>({
    queryKey: ["user-overview"],
    queryFn: async () => {
      // simulate API delay
      await new Promise((r) => setTimeout(r, 300));

      const total_users = USERS_MOCK.length;
      const active_users = USERS_MOCK.filter(
        (u) => u.status === "active"
      ).length;

      const suspended_users = USERS_MOCK.filter(
        (u) => u.status === "suspended"
      ).length;

      const avg_health =
        total_users === 0
          ? 0
          : USERS_MOCK.reduce((sum, u) => sum + u.health_score, 0) /
            total_users;

      return {
        total_users,
        active_users,
        suspended_users,
        avg_health: Number(avg_health.toFixed(2)),
      };
    },
  });
}
