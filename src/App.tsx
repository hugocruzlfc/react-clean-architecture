import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Feed } from "./pages/fedd.pages";
import { UserProfile } from "./pages/user-profile.page";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "/user/:handle",
        element: <UserProfile />,
      },
    ],
  },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
