import { payment_data, revenue_chart, revenue_overview } from "@/demo/revenue";

import type { RevenueRes } from "@/types/res/revenue";
import { useQuery } from "@tanstack/react-query";

export function useRevenueOverviewQuery() {
  return useQuery<RevenueRes, Error>({
    queryKey: ["revenue-overview"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));
      const data = {
        payment_data,
        revenue_chart,
        revenue_overview,
      };
      return data;
    },
  });
}
