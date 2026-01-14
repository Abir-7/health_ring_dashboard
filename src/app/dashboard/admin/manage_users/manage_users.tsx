/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo } from "react";
import OverviewCard from "@/components/custom_ui/dashboard/page/manage_user/overview_card";
import UserTable from "@/components/custom_ui/dashboard/page/manage_user/user_table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllUsersQuery } from "@/react_query_hook/query/get_all_user.query";
import { useGetUserOverview } from "@/react_query_hook/query/get_user_overview";
import { Search } from "lucide-react";
import type {
  Account_Status,
  Subscription_Tier,
} from "@/types/res/get_all_users";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [accountStatus, setAccountStatus] = useState<Account_Status | "">();
  const [subscriptionTier, setSubscriptionTier] = useState<
    Subscription_Tier | ""
  >();

  const filters = useMemo(
    () => ({
      search,
      account_status: accountStatus,
      subscription_type: subscriptionTier,
      page: 1, // always page 1 because no pagination
      limit: 1000, // large number to fetch all for display
    }),
    [search, accountStatus, subscriptionTier]
  );

  const { data: users, isLoading, error } = useGetAllUsersQuery(filters);
  const {
    data: overview,
    isLoading: isOverviewLoading,
    error: overviewError,
  } = useGetUserOverview();

  return (
    <div className="p-5 space-y-10">
      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:flex-1 relative">
          <Input
            type="text"
            placeholder="Search by name, email, or Ring ID..."
            className="ps-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <Search size={20} className="text-input-search" />
          </div>
        </div>

        <div className="flex gap-4">
          {/* Account Status Filter */}
          <Select
            onValueChange={(val: any) =>
              setAccountStatus(val === "all" ? "" : val)
            }
          >
            <SelectTrigger className="w-45 font-medium">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem> {/* Non-empty string */}
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          {/* Subscription Tier Filter */}
          <Select
            onValueChange={(val: any) =>
              setSubscriptionTier(val === "all" ? "" : val)
            }
          >
            <SelectTrigger className="w-45 font-medium">
              <SelectValue placeholder="All Tiers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
              <SelectItem value="Standard">Standard</SelectItem>
              <SelectItem value="Classic">Classic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overview */}
      <div>
        {isOverviewLoading ? (
          <p>Loading overview...</p>
        ) : overviewError ? (
          <p>Error loading overview</p>
        ) : (
          <OverviewCard data={overview!} />
        )}
      </div>

      {/* Users Table */}
      <div>
        {isLoading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p>Error loading users</p>
        ) : (
          <UserTable users={users?.data || []} />
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
