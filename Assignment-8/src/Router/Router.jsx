import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut/MainLayOut";
import Installation from "../Pages/Installation/Installation";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorPaged from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/MainHome/Home";


const router = createBrowserRouter([
  {
    path: "/",
     errorElement: <ErrorPaged/>,
    Component: MainLayOut,
    children: [
      {
        
        index: true,
        Component:Home,
      },
      {
       
        path:"/apps",
        Component: AllApps,
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
      },
      {
        path: "/Installation",
        Component: Installation,
      },{
        path:"*",
        Component:ErrorPaged
      }
    ],
  },
]);

export default router;
