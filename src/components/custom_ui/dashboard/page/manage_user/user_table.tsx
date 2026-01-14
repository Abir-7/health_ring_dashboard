import type { TUser } from "@/types/res/get_all_users";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import UserDetailsModal from "./modal/user_details_modal";
import UserStatus from "./user_status";
import UserSubscription from "./user_subscription";
const UserTable = ({ users }: { users: TUser[] }) => {
  return (
    <div className="overflow-x-auto w-full rounded-md border ">
      <Table className=" ">
        <TableHeader className="">
          <TableRow className="">
            <TableHead className="p-5 text-user-filter-option">User</TableHead>
            <TableHead className="p-5 text-user-filter-option">
              Contact
            </TableHead>
            <TableHead className="p-5 text-user-filter-option">
              Ring ID
            </TableHead>
            <TableHead className="p-5 text-user-filter-option">
              Subscription
            </TableHead>
            <TableHead className="p-5 text-user-filter-option">
              Status
            </TableHead>
            <TableHead className="p-5 text-user-filter-option">
              HEALTH SCORE
            </TableHead>
            <TableHead className="p-5 text-user-filter-option">
              ACTIONS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-user-filter-default">
          {users.map((user) => (
            <TableRow key={user.id} className="text-user-filter-default">
              <TableCell className="">
                <span className="flex gap-5 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="grid">
                    <span className="text-user-filter-default text-[16px] font-medium">
                      {" "}
                      {user.name}
                    </span>
                    <span className="text-user-filter-option">
                      {user.address}
                    </span>
                  </span>
                </span>
              </TableCell>
              <TableCell className="flex flex-col">
                <span className="text-user-filter-default text-[16px] font-medium">
                  {" "}
                  {user.email}
                </span>

                <span className="text-user-filter-option text-[16px]">
                  {" "}
                  {user.mobile}
                </span>
              </TableCell>
              <TableCell>{user.ring_id}</TableCell>
              <TableCell>
                <UserSubscription subs={user.subscription}></UserSubscription>
              </TableCell>
              <TableCell>
                <UserStatus status={user.status}></UserStatus>
              </TableCell>

              <TableCell>{user.health_score}</TableCell>
              <TableCell>
                <UserDetailsModal user={user}></UserDetailsModal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
