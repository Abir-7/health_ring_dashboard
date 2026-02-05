import type { Subscription_Tier } from "@/types/res/get_all_users";

export const appointments = [
  {
    appointment_id: "APT-1001",
    date: "2026-01-23",
    subscription_type: "Premium" as Subscription_Tier,
    user: {
      full_name: "John Doe",
      address: "123 Main St, Dhaka",
      mobile: "+880123456789",
      email: "john@example.com",
      image: "https://i.pravatar.cc/150?img=1", // API/placeholder image
    },
    doctor: {
      name: "Dr. Smith",
      specialist: "Cardiologist",
    },
  },
  {
    appointment_id: "APT-1002",
    date: "2026-01-24",
    subscription_type: "Basic" as Subscription_Tier,
    user: {
      full_name: "Jane Doe",
      address: "456 Park Ave, Dhaka",
      mobile: "+880987654321",
      email: "jane@example.com",
      image: "https://i.pravatar.cc/150?img=2",
    },
    doctor: {
      name: "Dr. Khan",
      specialist: "Dermatologist",
    },
  },
];
