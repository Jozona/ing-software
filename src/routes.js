import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Pedidos from "views/Pedidos.js";
import Proveedores from "views/Proveedores.js";
import Partes from "views/Partes.js";
import Clientes from "views/Clientes.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Salir de sistema",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Perfil",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/pedidos", //table
    name: "Pedidos",
    icon: "nc-icon nc-delivery-fast",
    component: Pedidos,
    layout: "/admin",
  },
  {
    path: "/proveedores", //typography
    name: "Proveedores",
    icon: "nc-icon nc-paper-2",
    component: Proveedores,
    layout: "/admin",
  },
  {
    path: "/partes",
    name: "Partes",
    icon: "nc-icon nc-app",
    component: Partes,
    layout: "/admin",
  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: "nc-icon nc-single-02",
    component: Clientes,
    layout: "/admin",
  },
];

export default dashboardRoutes;
