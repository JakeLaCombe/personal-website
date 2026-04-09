import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Home } from "./pages/Home.tsx";
import { Resume } from "./components/Resume/Resume.tsx";
import { Projects } from "./components/Projects/Projects.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "/resume", element: <Resume /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ],
  {
    basename:
      import.meta.env.MODE === "development" ? "/" : "/personal-website/",
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
