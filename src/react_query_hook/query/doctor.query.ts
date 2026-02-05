import { doctorsDemoData } from "@/demo/doctor";

import type { DoctorProps } from "@/types/res/doctor.res";
import { useQuery } from "@tanstack/react-query";

export function useGetDoctorQuery(search_term?: string) {
  return useQuery<DoctorProps[], Error>({
    queryKey: ["doctors", search_term ?? ""],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));

      if (!search_term) {
        return doctorsDemoData;
      }

      const term = search_term.toLowerCase().trim();

      return doctorsDemoData.filter(
        (doc) =>
          // adjust fields as needed
          doc?.name?.toLowerCase().includes(term) ||
          doc?.contact?.toLowerCase().includes(term),
      );
    },
  });
}
