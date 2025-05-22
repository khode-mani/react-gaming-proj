import "./App.scss";
import { useRoutes } from "react-router-dom";
import routeHa from "./routes";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {

  let router = useRoutes(routeHa)

  let [isLoading , setIsLoading] = useState(true)
  
  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    }, 6000);
  }, [])
  //تایم اوت رو اخر سر بزار رو 6000____________________________________
  
  return isLoading ? <Loader/> :  router;
}

export default App;
