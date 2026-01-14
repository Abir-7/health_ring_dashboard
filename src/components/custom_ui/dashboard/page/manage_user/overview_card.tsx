type OverviewCardProps = {
  data: {
    total_users: number;
    active_users: number;
    suspended_users: number;
    avg_health: number;
  };
};

const OverviewCard = ({ data }: OverviewCardProps) => {
  const cards = [
    {
      label: "Total Users",
      value: data.total_users,
      color: "rgba(16, 24, 40, 1)",
    },
    {
      label: "Active Users",
      value: data.active_users,
      color: "rgba(0, 166, 62, 1)",
    },
    {
      label: "Suspended Users",
      value: data.suspended_users,
      color: "rgba(231, 0, 11, 1)",
    },
    {
      label: "Average Health",
      value: `${data.avg_health * 100}%`, // convert to percentage
      color: "rgba(205, 170, 140, 1)",
    },
  ];

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="p-5 h-32 rounded-2xl shadow-md border space-y-3 "
        >
          <p className="text-[16px] text-user-filter-option ">{card.label}</p>
          <p style={{ color: card.color }} className={`text-3xl font-bold`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCard;
