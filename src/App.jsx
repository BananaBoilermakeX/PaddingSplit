import {RouterProvider, createBrowserRouter} from "react-router-dom";

import {Index} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
