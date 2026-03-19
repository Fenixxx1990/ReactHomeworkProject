import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favorites } from "./Pages/Favorites/Favorites";
import { Login } from "./Pages/Login/Login";
import { Main } from "./Pages/Main/Main";
import { Movie } from "./Pages/Movie/Movie";
import { Error } from "./Pages/Error/Error";
import { UserContextProvider } from "./context/user.context.provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
);
