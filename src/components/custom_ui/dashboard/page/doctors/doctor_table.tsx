import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { DoctorProps } from "@/types/res/doctor.res";
import UserStatus from "../manage_user/user_status";
import { Trash2 } from "lucide-react";
import DoctorDetails from "./details_modal";

interface Props {
  data: DoctorProps[];
}

const DoctorTable = ({ data }: Props) => {
  return (
    <div className="rounded-md border">
      <Table className="w-full min-w-200">
        <TableHeader>
          <TableRow>
            <TableHead className="text-user-filter-option">
              Specialist
            </TableHead>
            <TableHead className="text-user-filter-option">Join Date</TableHead>
            <TableHead className="text-user-filter-option">Contact</TableHead>
            <TableHead className="text-user-filter-option">
              Appointments
            </TableHead>
            <TableHead className="text-user-filter-option">Status</TableHead>

            <TableHead className="text-user-filter-option text-center">
              Action
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
            data.map((item, i) => (
              <TableRow key={i}>
                {/* SPECIALIST */}
                <TableCell>
                  <DoctorDetails
                    data={{
                      image: item.image,
                      name: item.name,
                      specialist: item.specialist,
                    }}
                  ></DoctorDetails>
                </TableCell>

                {/*JOIN DATE */}
                <TableCell>
                  <div className="text-sm">
                    <p className="text-user-filter-default">
                      {" "}
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    <p className="text-user-filter-default">{item.contact}</p>
                  </div>
                </TableCell>

                {/* APPOINTMENTS */}
                <TableCell>
                  <div>
                    <p className="font-medium text-user-filter-default">
                      {item.appointment}
                    </p>
                  </div>
                </TableCell>
                {/* Status*/}
                <TableCell className="capitalize">
                  <UserStatus status={item.status} />
                </TableCell>

                <TableCell className="capitalize">
                  <Trash2
                    size={16}
                    className="text-red-300 mx-auto hover:text-red-400"
                  ></Trash2>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorTable;
