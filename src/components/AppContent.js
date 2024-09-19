import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";

const AppContent = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />
        },
        {
            path: 'browse',
            element: <BrowsePage />
        }
    ])

    return <RouterProvider router={appRouter} />
}
export default AppContent;