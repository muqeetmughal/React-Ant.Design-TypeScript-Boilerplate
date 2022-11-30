
import { createBrowserRouter, RouteObject } from "react-router-dom";



const routes: RouteObject[] = [
    {
        path: "/",
        element: "<Root />",
        //loader: rootLoader,
        children: [
            {
                path: "team",
                element: "<Team /"
                //   loader: teamLoader,
            }
        ],
    }

]

export const router = createBrowserRouter(routes, {
    // basename: "/app",
});
