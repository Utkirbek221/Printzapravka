import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ErrorPage from "./Components/ErrorPage";
import AOS from 'aos';
import { useEffect } from 'react';
import About from "./Components/About";
import OurServices from "./Components/OurServices";
import Registor from "./Components/Registor";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/services",
          element: <OurServices/>,
        },
        {
          path: "/register",
          element: <Registor/>,
        },

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
