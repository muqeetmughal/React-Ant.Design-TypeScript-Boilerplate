import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";
import Error404 from "../views/errors/404";

function RootBoundary() {
    const error = useRouteError();

    // console.log(error)

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <Error404 />
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this</div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div>🫖</div>;
        }
    }

    return <div>Something went wrong</div>;
}



export default RootBoundary