import type { TUser } from "@/types/res/get_all_users";

export const USERS_MOCK: TUser[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
    subscription: "Premium",
    image: "",
    mobile: "01711111111",
    address: "Dhaka, Bangladesh",
    ring_id: "R001",
    health_score: 0.82,
    created_at: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    status: "suspended",
    subscription: "Classic",
    image: "",
    mobile: "01722222222",
    address: "Chittagong, Bangladesh",
    ring_id: "R002",
    health_score: 0.41,
    created_at: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "inactive",
    subscription: "Standard",
    image: "",
    mobile: "01733333333",
    address: "Sylhet, Bangladesh",
    ring_id: "R003",
    health_score: 0.63,
    created_at: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "4",
    name: "David Warner",
    email: "david@example.com",
    status: "active",
    subscription: "Standard",
    image: "",
    mobile: "01744444444",
    address: "Khulna, Bangladesh",
    ring_id: "R004",
    health_score: 0.91,
    created_at: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "5",
    name: "Eleven warner",
    email: "eva@example.com",
    status: "active",
    subscription: "Premium",
    image: "",
    mobile: "01755555555",
    address: "Rajshahi, Bangladesh",
    ring_id: "R005",
    health_score: 0.77,
    created_at: "2022-01-01T00:00:00.000Z",
  },
];

export const userOverview = {
  contact: {
    name: "Amara K",
    email: "amara.k@email.ci",
    phone: "+225 07 12 34 56 78",
    address: "Abidjan, Cocody",
  },
  device: {
    ring_id: "BISO-PR-8945",
    last_active: "2 hours ago",
    battery_status: "78%",
  },
};

export const userHealthInfo = {
  overall_health_score: 80, // 1-100 scale
  heartrate: 72, // in bpm
  sleep_quality: 8, // out of 10
  activity: 12000, // steps or activity count
};

export const familyMembers = [
  {
    name: "John Doe",
    image: "https://example.com/images/john.jpg",
    health_score: 85, // 1-100 scale
  },
  {
    name: "Jane Doe",
    image: "https://example.com/images/jane.jpg",
    health_score: 92,
  },
  {
    name: "Sam Doe",
    image: "https://example.com/images/sam.jpg",
    health_score: 78,
  },
];
