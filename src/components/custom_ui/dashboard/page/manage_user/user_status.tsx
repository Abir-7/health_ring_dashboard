import type { Account_Status } from "@/types/res/get_all_users";

const UserStatus = ({ status }: { status: Account_Status }) => {
  return (
    <span
      className={`font-medium rounded-md ${
        status === "active"
          ? "text-[#008236] px-4 py-1.5 bg-[#B9F8CF]"
          : status === "suspended"
          ? "text-[#C10007]  px-4 py-1.5 bg-[#FFC9C9]"
          : "text-gray-600  px-4 py-1.5 bg-gray-100"
      }`}
    >
      {" "}
      {status}
    </span>
  );
};

export default UserStatus;
