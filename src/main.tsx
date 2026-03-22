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
import axios from "axios";
import { url } from "./Helpers/API";
import { RequireAuth } from "./Helpers/RequireAuth";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
        loader: async ({ params }) => {
          return await axios
            .get(`${url}i=${params.id}`)
            .then((res) => res.data);
        },
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
