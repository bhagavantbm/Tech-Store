import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../navbar/Profile";
import { Dashboard } from "../navbar/Dashboard";
import { Mycart } from "../navbar/Mycart";
import path from "path";
import { Logout } from "../navbar/Logout";
import { OnClick } from "../navbar/Onclick";
import { Laptop } from "../navbar/Laptop";
import { Mobile } from "../navbar/mibile/Mobile";
import { Redmi } from "../navbar/mibile/Redmi";
import { Samsung } from "../navbar/mibile/samsung/samsung";
import { Oneplus } from "../navbar/mibile/oneplus/Oneplus";






let allpages={
    path:'/',
    element:<><Outlet/></>,
    children:[
       {
            path:'home',
            element:<Home/>
        },{
            path:'login',
            element:<Login/>
        },
     {
        path:'register',
        element:<Register/>
     },{
        path:'profile',
        element:<Profile/>
     },{
        path:'Dashboard',
        element:<Dashboard/>
     },
     {
        path:'Mycart',
        element:<Mycart/>
     },{
        path:'Logout',
        element:<Logout/>

     },{
        path:'Onclick',
        element:<OnClick/>
     },{
        path:'laptop',
        element:<Laptop/>
     },{
        path:'mobile',
        element:<Mobile/>
     },{
        path:'redmi',
        element:<Redmi/>
     },{
        path:'samsung',
        element:<Samsung/>

     },{
        path:'oneplus',
        element:<Oneplus/>
        
     }

    
    ]
}






function Allroutes(){
    return useRoutes([allpages])
}
export default Allroutes