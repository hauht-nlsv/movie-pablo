import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import ErrorPage from "../layout/error-page";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
