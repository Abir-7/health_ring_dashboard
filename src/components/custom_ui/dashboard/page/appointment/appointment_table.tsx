import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserSubscription from "../manage_user/user_subscription";
import type { Subscription_Tier } from "@/types/res/get_all_users";

interface AppointmentTableProps {
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

interface Props {
  data: AppointmentTableProps[];
}

const AppointmentTable = ({ data }: Props) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-user-filter-option">User</TableHead>
            <TableHead className="text-user-filter-option">Contact</TableHead>
            <TableHead className="text-user-filter-option">Doctor</TableHead>
            <TableHead className="text-user-filter-option">
              Subscription
            </TableHead>
            <TableHead className="text-user-filter-option">Date</TableHead>
            <TableHead className="text-user-filter-option">
              Appointment ID
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center text-muted-foreground"
              >
                No appointments found
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.appointment_id}>
                {/* USER */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.user.image}
                      alt={item.user.full_name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-user-filter-default">
                        {item.user.full_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.user.address}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* CONTACT */}
                <TableCell>
                  <div className="text-sm">
                    <p className="text-user-filter-default">
                      {item.user.mobile}
                    </p>
                    <p className="text-muted-foreground">{item.user.email}</p>
                  </div>
                </TableCell>

                {/* DOCTOR */}
                <TableCell>
                  <div>
                    <p className="font-medium text-user-filter-default">
                      {item.doctor.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.doctor.specialist}
                    </p>
                  </div>
                </TableCell>

                {/* SUBSCRIPTION */}
                <TableCell className="capitalize">
                  <UserSubscription subs={item.subscription_type} />
                </TableCell>

                {/* DATE */}
                <TableCell className="text-user-filter-default">
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>

                {/* ID */}
                <TableCell className=" text-sm text-user-filter-default">
                  {item.appointment_id}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppointmentTable;
