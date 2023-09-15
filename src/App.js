import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Browse from "./components/Browse";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Signin />
        </div>
      ),
    },
    {
      path: "/browse",
      element: (
        <div>
          <Browse />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
