import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
 
import ProfessionalResume from "../Components/ProfessionalResume";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";

 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/banner",
        element: <Hero />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/CV",
        element: <ProfessionalResume />,
      },
    ],
  },
]);
