import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  Disc2,
  DollarSign,
  Users,
} from "lucide-react";

interface OverviewCardProps {
  total_users: number;
  user_groth: number;
  active_ring: number;
  ring_groth: number;
  active_subscription: number;
  subscription_groth: number;
  monthly_revenue: number;
  revenue_groth: number;
}

type Props = {
  data: OverviewCardProps | null;
};

const EMPTY_DATA: OverviewCardProps = {
  total_users: 0,
  user_groth: 0,
  active_ring: 0,
  ring_groth: 0,
  active_subscription: 0,
  subscription_groth: 0,
  monthly_revenue: 0,
  revenue_groth: 0,
};

const OverviewCardDashboard = ({ data }: Props) => {
  const safeData = data ?? EMPTY_DATA;

  const cards = [
    {
      title: "Total Users",
      value: safeData.total_users,
      growth: safeData.user_groth,
      icon: <Users />,
    },
    {
      title: "Active Rings",
      value: safeData.active_ring,
      growth: safeData.ring_groth,
      icon: <Disc2 />,
    },
    {
      title: "Active Subscriptions",
      value: safeData.active_subscription,
      growth: safeData.subscription_groth,
      icon: <CreditCard />,
    },
    {
      title: "Monthly Revenue",
      value: safeData.monthly_revenue,
      growth: safeData.revenue_groth,
      icon: <DollarSign />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[16px] text-user-filter-option">
                {card.title}
              </p>
              <p className="text-xl font-semibold">{card.value}</p>
            </div>
            <div className="text-app-base-color bg-app-base-color_hover p-2 rounded-lg">
              {card.icon}
            </div>
          </div>

          <p
            className={`mt-2 flex items-center text-sm ${
              card.growth >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {card.growth >= 0 ? (
              <ArrowUp size={14} className="mr-1" />
            ) : (
              <ArrowDown size={14} className="mr-1" />
            )}

            <span className="font-medium">{Math.abs(card.growth)}%</span>
            <span className="ml-1 text-user-filter-option">vs last month</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCardDashboard;
