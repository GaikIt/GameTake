import FreeGame from "../components/FreeGame/FreeGame";
import { Header } from "../components/layout/Header/Header";
import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import GamePage from "../components/game/GamePage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("/home"),
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/freegame",
        element: <FreeGame />,
      },
      {
        path: "/freegame/:id",
        element: <GamePage />,
      },
    ],
  },
]);
