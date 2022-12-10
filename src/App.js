import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Main from "./Components/Layout/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skill from "./Components/Skill/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="font-semibold">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
