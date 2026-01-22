// types/res/dashboard_overview.ts

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface SubscriptionItem {
  name: string;
  value: number;
  percentage: number;
  fill: string;
}

export interface UserGrowthData {
  name: string;
  value: number;
}

export interface HealthStats {
  avg_heart_rate: number;
  heart_growth: number;
  sleep_growth: number;
  sleep_quality: number;
  avg_step: number;
  step_growth: number;
}

export interface OverviewStats {
  total_users: number;
  user_groth: number;
  active_ring: number;
  ring_groth: number;
  active_subscription: number;
  subscription_groth: number;
  monthly_revenue: number;
  revenue_groth: number;
}

export interface AlertStats {
  critical: number;
  high_priority: number;
  monitoring: number;
}

export interface DashboardOverviewRes {
  revenue_data: RevenueData[];
  subscriptionData: SubscriptionItem[];
  user_data: UserGrowthData[];
  health_data_two: HealthStats;
  overview_data: OverviewStats;
  health_data: AlertStats;
}
