import { IoIosArrowUp } from 'react-icons/io';
import './GoUp.scss'
import { useEffect, useState } from 'react';

export default function GoUp(params) {
    
    const [scroll , setScroll] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // مقدار ۰ به معنای بالای صفحه است
            behavior: 'smooth', // اسکرول روان
        });
    };


    const isScroll = ()=>{
        if(window.scrollY > 300){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll" , isScroll);

        return ()=>{
            window.addEventListener("scroll", isScroll);
        }


    },[])
    return(
        <a className="go-up" onClick={scrollToTop} style={{bottom : scroll ? "40px" : "-1000px"}}>
            <div className="arrow">
                <IoIosArrowUp />
            </div>
        </a>
        
    );
}