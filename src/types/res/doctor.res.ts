export interface DoctorProps {
  image: string;
  name: string;
  specialist: string;
  date: string;
  contact: string;
  appointment: number;
  status: "active" | "inactive";
}
