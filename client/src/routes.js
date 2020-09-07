import Index from "views/Index.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import EmployeeScreen from "./views/pages/Employees/EmployeeScreen";
import FinancialScreen from './views/pages/Financial/FinancialScreen'
import CalendarScreen from './views/pages/Calendar/CalendarScreen'
import ReportScreen from './views/pages/Reports/ReportScreen'
import StockScreen from './views/pages/Stock/StockScreen'

let routes = [
  {
    path: "/index",
    name: "Ana Sayfa",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "Çalışanlar",
    icon: "ni ni-user-run text-orange",
    component: EmployeeScreen,
    layout: "/admin",
  },
  {
    path: "/financial",
    name: "Mali işler",
    icon: "ni ni-money-coins text-green",
    component: FinancialScreen,
    layout: "/admin",
  },
  {
    path: "/calender",
    name: "İş Takibi / Takvim",
    icon: "ni ni-collection text-yellow",
    component: CalendarScreen,
    layout: "/admin",
  },
  {
    path: "/stock",
    name: "Stok Takibi",
    icon: "ni ni-archive-2 text-info",
    component: StockScreen,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Raporlar",
    icon: "ni ni-chart-pie-35 text-red",
    component: ReportScreen,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
