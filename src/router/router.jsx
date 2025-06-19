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
import VolunteerNeedPostsDetails from "../pages/VolunteerNeedPostsDetails";
import PrivateRoute from "../routes/PrivateRoute";
import BeAVolunteer from "../pages/BeAVolunteer";



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
          loader: () => fetch("http://localhost:3000/vols"),
          element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>
        },
        {
         path: "/addVolunteerNeedPost",
         element: <PrivateRoute>
          <AddVolunteerNeedPost></AddVolunteerNeedPost>
         </PrivateRoute>
        },
        {
          path: "/manageMyPosts",
          element: <PrivateRoute>
            <ManageMyPosts></ManageMyPosts>
          </PrivateRoute>
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/register",
          Component: Register
        },
        {
          path: "/vols/:id",
          loader: ({ params }) => fetch(`http://localhost:3000/vols/${params.id}`),
          element: <PrivateRoute>
            <VolunteerNeedPostsDetails></VolunteerNeedPostsDetails>
            </PrivateRoute>
        },
        {
          path: "/beAVols/:id",
          element: <PrivateRoute>
              <BeAVolunteer></BeAVolunteer>
            </PrivateRoute>    
        }
    ]
  },
]);

export default router;