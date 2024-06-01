import Dashboard from "../views/Dashboard.js";
import UserProfile from "../views/UserProfile.js";
import TableList from "../views/TableList.js";
import Typography from "../views/Typography.js";
import Icons from "../views/Icons.js";
import Notifications from "../views/Notifications.js";
import AccountManager from "../views/AccountManager.js";


const dashboardRoutes = [
    {
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "nc-icon nc-circle-09",
        component: UserProfile,
        layout: "/admin"
    },
    {
        path: "/table",
        name: "Product",
        icon: "nc-icon nc-notes",
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/account-manager",
        name: "Account Manager",
        icon: "nc-icon nc-paper-2",
        component: AccountManager,
        layout: "/admin"
    },

    {
        path: "/icons",
        name: "Icons",
        icon: "nc-icon nc-atom",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: Notifications,
        layout: "/admin"
    },

    {
        path: "/typography",
        name: "Typography",
        icon: "nc-icon nc-paper-2",
        component: Typography,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "nc-icon nc-atom",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: Notifications,
        layout: "/admin"
    }
];

export default dashboardRoutes;