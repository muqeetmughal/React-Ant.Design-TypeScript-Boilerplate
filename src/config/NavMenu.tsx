import { UserOutlined, DesktopOutlined, TeamOutlined, DollarCircleOutlined, PaperClipOutlined } from '@ant-design/icons';

const navitems = [
    {
        key: "/dashboard",
        icon: <DesktopOutlined />,
        label: "Dashboard",
        allowed_permissions: [],
        allowed_roles: ["superadmin"],
    },
    {
        key: "/users",
        icon: <UserOutlined />,
        label: "Users",
        allowed_permissions: ["users.read"],
        allowed_roles: ["superadmin"],

    },
    {
        key: "/clients",
        icon: <TeamOutlined />,
        label: "Clients",
        allowed_permissions: ["clients.read"],
        allowed_roles: ["superadmin"],
    },
    {
        key: "/managers",
        icon: <TeamOutlined />,
        label: "Managers",
        allowed_permissions: ["items.read"],
        allowed_roles: ["superadmin"],
    },
    {
        key: "/funds",
        icon: <DollarCircleOutlined />,
        label: "Funds",
        allowed_permissions: ["items.read"],
        allowed_roles: ["superadmin"],
    },
    {
        key: "/subfunds",
        icon: <DollarCircleOutlined />,
        label: "Sub Funds",
        allowed_permissions: ["items.read"],
        allowed_roles: ["superadmin"],
    },
    {
        key: "/shareclass",
        icon: <DollarCircleOutlined />,
        label: "Share Classes",
        allowed_permissions: ["items.read"],
        allowed_roles: ["superadmin"],
    },
    {
        key: "/tasks",
        icon: <PaperClipOutlined />,
        label: "Tasks",
        allowed_permissions: ["items.read"],
        allowed_roles: ["superadmin"],
    }
]



export default navitems