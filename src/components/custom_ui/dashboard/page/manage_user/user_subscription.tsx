import type { Subscription_Tier } from "@/types/res/get_all_users";

const UserSubscription = ({ subs }: { subs: Subscription_Tier }) => {
  return (
    <span
      className={`font-medium text-[14px] ${
        subs === "Premium"
          ? "text-[#8200DB] px-4 py-1.5 rounded-md bg-[#F3E8FF]"
          : subs === "Standard"
          ? "text-[#1447E6] px-4 py-1.5 rounded-md bg-[#DBEAFE]"
          : "text-[#CA3500] px-4 py-1.5 rounded-md bg-[#F5E7DB]"
      }`}
    >
      {subs}
    </span>
  );
};

export default UserSubscription;
