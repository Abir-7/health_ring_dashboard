import {
  health_data,
  health_data_two,
  overview_data,
  revenue_data,
  subscriptionData,
  user_data,
} from "@/demo/dashboard";
import type { DashboardOverviewRes } from "@/types/res/dashboard";
import { useQuery } from "@tanstack/react-query";

export function useDashboardOverviewQuery() {
  return useQuery<DashboardOverviewRes, Error>({
    queryKey: ["dashboard-overview"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));
      const data = {
        revenue_data,
        subscriptionData,
        user_data,
        health_data,
        health_data_two,
        overview_data,
      };
      return data;
    },
  });
}
