
import { createBrowserRouter, RouteObject } from "react-router-dom";

// import { DatePicker } from 'antd';
import LoginPage from "../views/auth/LoginPage";
import MainLayout from "../shared/layouts/MainLayout";
import UsersPage from "../views/apps/users/UsersPage";
import RootBoundary from "./errorBoundry";
import PublicLayout from "../shared/layouts/PublicLayout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        //loader: rootLoader,
        errorElement: <RootBoundary />,
        children: [
            {
                index: true,
                element: "Home"
                //   loader: teamLoader,
            },
            {
                path: "users",
                element: <UsersPage />
                //   loader: teamLoader,
            }
        ],
    }, {
        path: "auth",
        element: <PublicLayout />,
        //loader: rootLoader,
        errorElement: <RootBoundary />,
        children: [
            {
                path: "login",
                element: <LoginPage />
                //   loader: teamLoader,
            }
        ],
    }

]

export const router = createBrowserRouter(routes, {
    // basename: "/app",
});
