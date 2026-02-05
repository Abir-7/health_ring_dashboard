import DoctorTable from "@/components/custom_ui/dashboard/page/doctors/doctor_table";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useGetDoctorQuery } from "@/react_query_hook/query/doctor.query";

import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [search, setSearch] = useState("");
  const { data: doctors } = useGetDoctorQuery(search);
  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4">
        <div className="flex w-full gap-4">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search by name"
              className="ps-10 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-2">
              <Search size={20} className="text-input-search" />
            </div>
          </div>
          <Link to="/doctors">
            <Button className="text-user-filter-option " variant={"outline"}>
              <span className="flex items-center">
                Add <Plus size={14} className="" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <DoctorTable data={doctors || []} />
    </div>
  );
};

export default Doctors;
