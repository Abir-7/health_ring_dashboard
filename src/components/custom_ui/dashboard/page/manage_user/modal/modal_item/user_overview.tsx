import { Mail, MapPin, Phone } from "lucide-react";

interface UserOverviewProps {
  contact: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  device: {
    ring_id: string;
    last_active: string;
    battery_status: string;
  };
}

const UserOverview = ({ data }: { data: UserOverviewProps }) => {
  return (
    <div className="space-y-4">
      <div className="w-full border p-4 rounded-lg">
        <h2 className="text-[16px] mb-4 ">Contact Information</h2>
        <ul className="list-inside text-[14px] list-none space-y-2 text-user-filter-default">
          <li className="flex gap-2 items-center">
            <Mail size={16} className="text-user-filter-option" />{" "}
            {data.contact.email}
          </li>
          <li className="flex gap-2 items-center">
            <Phone size={16} className="text-user-filter-option"></Phone>
            {data.contact.phone}
          </li>
          <li className="flex gap-2 items-center">
            <MapPin size={16} className="text-user-filter-option"></MapPin>
            {data.contact.address}
          </li>
        </ul>
      </div>
      <div className="w-full border p-4 rounded-lg">
        <h2 className="text-[16px] mb-4 ">Device Information</h2>
        <ul className="list-inside text-[14px] list-none space-y-2 text-user-filter-default">
          <li className="flex gap-2 items-center justify-between">
            <span className="text-user-filter-option">Ring ID</span>
            {data.device.ring_id}
          </li>
          <li className="flex gap-2 items-center justify-between">
            <span className="text-user-filter-option">Last Active</span>
            {data.device.last_active}
          </li>
          <li className="flex gap-2 items-center justify-between">
            <span className="text-user-filter-option">Battery Status</span>
            <span className="text-green-600">{data.device.battery_status}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserOverview;
