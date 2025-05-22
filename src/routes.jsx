import PrivateRoute from "./components/PrivetRoute/PrivetRoute";
import Setting from "./components/PrivetRoute/Setting";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Games from "./pages/Games/Games";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import SetProfile from "./pages/Profile/setProfile/setProfile";
import Store from "./pages/Store/Store";

let routeHa = [
    {path : '/' , element: <Home/>},
    
    {path : '/about'  , element : <About/>},
    {path : '/cart'  , element : <Cart/>},
    {path : '/contact'  , element : <Contact/>},
    {path : '/games'  , element : <Games/>},
    {path : '/login'  , element : <Login/>},
    {path : '/profile'  , element : <Profile/> },
    {path : '/profile/set'  , element : <SetProfile/> },
    {path : '/setting'  , element : <PrivateRoute> <Setting/> </PrivateRoute> },
    // {path : '/store'  , element : <Store/>},
    {path : '/store/:gameId'  , element : <Store/>},
    {path : '/*'  , element : <NotFound/>},

]

export default routeHa;