import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.scss";
import { useEffect, useState } from "react";
import OffCanvasMenu from "./OffCanves";
import { isLogin } from "../../utils";


export default function Navbar() {

    const [isScroll, setIsScroll] = useState(true); // عرض پیش‌فرض

    const [navWidth , setNavWidth] = useState('40%')

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScroll(true); // عرض کمتر هنگام اسکرول
          setNavWidth(isDesktop ? "10%" : "50%")
        }else{
            setIsScroll(false)
            setNavWidth(isDesktop ? "40%" : "85%")
        }
      };
      
    useEffect(()=>{
        handleScroll()
    },[])
//       useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//           window.removeEventListener('scroll', handleScroll);
//         };
//       }, []);

//         const handleResize = () => {
//     setIsDesktop(window.innerWidth <= 768);
//   };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    //   window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);


  return (
    <>
    <div className="all-nav-con " id="top">
        <div className={isScroll ? "nav-con-scrolly nav-con" : "nav-con"} style={{width : navWidth , transition: '.5s ease'} }>
            <div className="right">
            
            <Link to="/">

                <img src={logo} alt="" />

                {
                    // isDesktop ?
                    (isScroll ? '' : <span className="en">MANI GAMING</span>)
                    // : 
                    // ('')
                }
            </Link>

            </div>

            <div className="left">

                {
                    isDesktop?
                    (
                        isScroll ? 

                        <OffCanvasMenu/>
                        
                        :
                        
                        <ul className="pay2">
                            <li><NavLink to={'/games'}>بازی ها</NavLink></li>
                            <li><NavLink to={'/cart'}>سبد خرید</NavLink></li>
                            <li><NavLink to={'/profile'}>
                            {
                              isLogin() ? "پروفایل" : "ورود"
                            }
                            
                            </NavLink></li>
                            <OffCanvasMenu/>
                        </ul>
                        
                    )
                    :
                    <OffCanvasMenu/>
                }
            </div>
        </div>
    </div>
    </>
  );
}
