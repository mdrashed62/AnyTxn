import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../Pages/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Services from "../Pages/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/about",
        element: <About />
      },
      
    ],
  },
]);
