import type { Subscription_Tier } from "./get_all_users";

export interface AppointmentProps {
  user: {
    image: string;
    full_name: string;
    address: string;
    mobile: string;
    email: string;
  };
  doctor: {
    name: string;
    specialist: string;
  };
  date: string;
  subscription_type: Subscription_Tier;
  appointment_id: string;
}
