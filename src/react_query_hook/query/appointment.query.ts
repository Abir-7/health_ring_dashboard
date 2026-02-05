import { appointments } from "@/demo/appointment";
import type { AppointmentProps } from "@/types/res/appointment";
import { useQuery } from "@tanstack/react-query";

export function useAppointmentQuery(search_term?: string) {
  return useQuery<AppointmentProps[], Error>({
    queryKey: ["appointment", search_term ?? ""],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));

      if (!search_term) {
        return appointments;
      }

      const term = search_term.toLowerCase().trim();

      return appointments.filter(
        (appointment) =>
          // adjust fields as needed
          appointment.user.email?.toLowerCase().includes(term) ||
          appointment.user.full_name?.toLowerCase().includes(term),
      );
    },
  });
}
