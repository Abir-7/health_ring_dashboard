import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { TUser } from "@/types/res/get_all_users";
import UserStatus from "../user_status";
import UserSubscription from "../user_subscription";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import UserOverview from "./modal_item/user_overview";
import {
  familyMembers,
  userHealthInfo,
  userOverview,
} from "@/demo/user_manage";
import HealthOverview from "./modal_item/health_overview";
import MemberOverview from "./modal_item/member_overview";
function UserDetailsModal({ user }: { user: TUser }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="hover:bg-app-base-color hover:text-white"
          >
            View Details
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-3 ">
                  <span className="text-lg text-left font-bold text-user-filter-default">
                    {user.name}
                  </span>
                  <span className="flex gap-2">
                    <span>
                      <UserStatus status={user.status}></UserStatus>
                    </span>

                    <span>
                      {" "}
                      <UserSubscription
                        subs={user.subscription}
                      ></UserSubscription>
                    </span>
                  </span>
                  <span>
                    Member since: {new Date(user.created_at).toDateString()}
                  </span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <hr />
          <div className="grid gap-4 w-full">
            <Tabs defaultValue="overview" className="w-full ">
              <TabsList className="w-full rounded-2xl h-10 p-1 mb-2 mt-0.5">
                <TabsTrigger value="overview" className="rounded-2xl">
                  Overview
                </TabsTrigger>
                <TabsTrigger className="rounded-2xl" value="health">
                  Health Data
                </TabsTrigger>
                <TabsTrigger value="family" className="rounded-2xl">
                  Family
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <UserOverview data={userOverview}></UserOverview>
              </TabsContent>
              <TabsContent value="health">
                <HealthOverview data={userHealthInfo}></HealthOverview>
              </TabsContent>
              <TabsContent value="family">
                <MemberOverview data={familyMembers} />
              </TabsContent>
            </Tabs>
          </div>
          {/* <DialogFooter></DialogFooter> */}
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default UserDetailsModal;
