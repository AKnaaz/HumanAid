import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost"         
import ManageMyPosts from "../pages/ManageMyPosts"
import Login from "../pages/Login";
import Register from "../pages/Register"


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "/allVolunteerNeedPosts",
          element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>
        },
        {
         path: "/addVolunteerNeedPost",
         element: <AddVolunteerNeedPost></AddVolunteerNeedPost>
        },
        {
          path: "/manageMyPosts",
          element: <ManageMyPosts></ManageMyPosts>
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/register",
          Component: Register
        },
    ]
  },
]);

export default router;