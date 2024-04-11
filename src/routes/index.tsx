import { DataProvider } from "../context";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from "./error.page";


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <div>Hello world! home </div>,
    },
  ]);

export const AppRoot =()=>{


    return(
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    )
}