import { Progress } from "@/components/ui/progress";
import { Activity, Heart, Moon } from "lucide-react";

interface HealthOverviewProps {
  overall_health_score: number;
  heartrate: number;
  sleep_quality: number;
  activity: number;
}
const HealthOverview = ({ data }: { data: HealthOverviewProps }) => {
  return (
    <div className="p-4 rounded-lg space-y-5 text-user-filter-default border">
      <p className="text-[16px]">Health Overview</p>
      <div className="space-y-2">
        <p className="text-[14px] text-user-filter-option ">
          Overall Health Score {data.overall_health_score}/100
        </p>
        <Progress
          value={33}
          className="h-3 "
          classNameIndicator="bg-app-base-color"
        ></Progress>
      </div>

      <div className="flex justify-evenly gap-2  text-[12px]">
        <div className="flex w-full flex-col items-center justify-center bg-[#FEF2F2] rounded-md p-2">
          <Heart size={20} className="text-red-600"></Heart>
          <p>Heart Rate</p>
          <p className="font-bold text-[18px]">{data.heartrate} bpm</p>
        </div>
        <div className="flex bg-[#EFF6FF] rounded-md p-2 w-full flex-col items-center justify-center">
          <Moon className="text-[#155DFC]" size={20}></Moon>
          <p>Sleep Quality</p>
          <p className="font-bold text-[18px]">{data.sleep_quality}/10</p>
        </div>
        <div className="flex bg-[#F0FDF4] rounded-md p-2 w-full flex-col items-center justify-center">
          <Activity size={20} className="text-[#00A63E]"></Activity>
          <p>Activity</p>
          <p className="font-bold text-[18px]">{data.activity}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthOverview;
