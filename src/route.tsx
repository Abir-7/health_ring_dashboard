import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "./app/layout/main.layout";
// import HomePage from "./app/main/home/home";
import DashboardLayout from "./app/layout/dashboard.layout";
import OverviewPage from "./app/dashboard/overview";
import NotFound from "./app/not_found";
import LoginPage from "./app/auth/login/login";
// import Product from "./app/main/product/product";
// import ProductDetails from "./app/main/product/details/product_details";
import CheckRole from "./components/guards/check_role";
import ManageUsers from "./app/dashboard/admin/manage_users/manage_users";

import PaymentPage from "./app/dashboard/admin/payment/payment";
import DoctorAppointment from "./app/dashboard/admin/doctor_appoinment/doctor_appointment";
import Settings from "./app/dashboard/admin/settings/settings";
import Doctors from "./app/dashboard/admin/doctors/doctor";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <HomePage></HomePage>,
  //     },
  //     {
  //       path: "/products",
  //       element: <Product></Product>,
  //     },
  //     {
  //       path: "/products/:id",
  //       element: (
  //         <CheckRole role={["user", "admin"]}>
  //           <ProductDetails></ProductDetails>
  //         </CheckRole>
  //       ),
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <CheckRole role={["user", "admin"]}>
            <OverviewPage></OverviewPage>
          </CheckRole>
        ),
      },
      {
        path: "manage-users",
        element: (
          <CheckRole role={["user", "admin"]}>
            <ManageUsers></ManageUsers>
          </CheckRole>
        ),
      },
      {
        path: "payments-revenue",
        element: (
          <CheckRole role={["user", "admin"]}>
            <PaymentPage></PaymentPage>
          </CheckRole>
        ),
      },
      {
        path: "doctor-appointment",
        element: (
          <CheckRole role={["user", "admin"]}>
            <DoctorAppointment />
          </CheckRole>
        ),
      },
      {
        path: "settings",
        element: (
          <CheckRole role={["user", "admin"]}>
            <Settings />
          </CheckRole>
        ),
      },
      {
        path: "doctors",
        element: (
          <CheckRole role={["user", "admin"]}>
            <Doctors />
          </CheckRole>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
