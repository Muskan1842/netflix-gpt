import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContent from "./components/AppContent";
import appStore from "./store/appStore";
import LoginPage from "./components/LoginPage";
import BrowsePage from "./components/BrowsePage";
import { Provider } from "react-redux";

function App() {

  const appRouter = createBrowserRouter([

    {
      path: '/',
      element: <AppContent />,
      children: [
        {
          path: '/',
          element: <LoginPage />
        },
        {
          path: 'browse',
          element: <BrowsePage />
        }
      ]
    },
  ])

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
