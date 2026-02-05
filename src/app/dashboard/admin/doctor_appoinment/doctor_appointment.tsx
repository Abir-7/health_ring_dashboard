import AppointmentTable from "@/components/custom_ui/dashboard/page/appointment/appointment_table";

import { Input } from "@/components/ui/input";

import { useAppointmentQuery } from "@/react_query_hook/query/appointment.query";

import { Search } from "lucide-react";
import { useState } from "react";

const DoctorAppointment = () => {
  const [search, setSearch] = useState("");
  const { data } = useAppointmentQuery(search);
  return (
    <div className="p-4 space-y-4">
      <div className="lg:flex-1 relative">
        <Input
          type="text"
          placeholder="Search by name"
          className="ps-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <Search size={20} className="text-input-search" />
        </div>
      </div>
      <AppointmentTable data={data || []} />
    </div>
  );
};

export default DoctorAppointment;
