import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Browse from "./components/Browse";
import Search from "./components/Search";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/",
      element: (
        <div className="bg-black min-h-screen">
          <Header />
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/movie/:id",
          element: <Movie />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
