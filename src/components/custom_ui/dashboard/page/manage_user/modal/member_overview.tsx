import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FamilyMembers {
  name: string;
  image: string;
  health_score: number;
}

const MemberOverview = ({ data }: { data: FamilyMembers[] }) => {
  return (
    <div className="p-4 rounded-lg space-y-5 text-user-filter-default border">
      <p>Family Members {data?.length && <>({data.length})</>}</p>

      {data?.map((member) => (
        <div className="flex items-center space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="grid">
            <span className="">{member.name}</span>
            <span className="text-user-filter-option text-[12px]">
              Health Score: {member.health_score}/100
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MemberOverview;
