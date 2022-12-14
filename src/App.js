import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import MainLayout from "./Components/Layout/MainLayout";
import Modal from "./Components/Modal/Modal";
import Portfolio from "./Components/Portfolio/Portfolio";
import ProjectDit from "./Components/ProjectDit/ProjectDit";
import Skill from "./Components/Skill/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/project/:id",
        element: <ProjectDit></ProjectDit>,
        loader: ({ params }) => fetch(`Projects.json/${params.id}`),
      },
    ],
  },
]);
function App() {
  return (
    <div className="mainDiv font-semibold ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
