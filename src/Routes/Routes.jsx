import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layouts/Root";
import Home from "../Components/Layouts/Pages/Home";
import Login from "../Components/Layouts/Pages/Login/Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },{
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default routes;