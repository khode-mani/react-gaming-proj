import { useEffect, useRef, useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../components/navbar/Navbar';
import { isLogin } from '../../utils';

export default function Login() {
    let [userName , setUserName] = useState('')
    let [password , setPassword] = useState('')

    const inpHandle = (e)=>{
        if (e.target.name === "user") {
            setUserName(e.target.value)
            
        }else{
            setPassword(e.target.value)
        }
    }

    let navigate = useNavigate()

    useEffect(()=>{
      if(isLogin()){
        navigate('/profile')
        return;
      }

    },[])

    const submitHandle = async () => {

        
        if (userName === "mani" && password === "1") {
            
            document.cookie = "username=mani; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
            
            await Swal.fire({
                title: "ورود موفقیت آمیز بود",
                icon: "success",
                confirmButtonText: "بستن",
                allowOutsideClick: false,
                allowEscapeKey: false,
                didClose: () => {
                    navigate("/profile");
                }
          });
        } else {
            await Swal.fire({
                title: "ناموفق",
                text: "یوزرنیم یا پسورد اشتباهه",
                icon: "error",
                confirmButtonText: "باشه",
            });
        }

        if (userName === "kakmani" && password === "1384") {
            
            document.cookie = "username=kakmani; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";

            await Swal.fire({
                title: "به به به به به به سلطان",
                icon: "warning",
                confirmButtonText: "بستن",
                allowOutsideClick: false,
                allowEscapeKey: false,
                didClose: () => {
                    navigate("/profile");
                }
          });
        }
      };
    
    let passRef = useRef()


    const enterHandle = (e)=>{
        if (e.key == "Enter") {
            e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم
            if (e.target.name == "user") {
                passRef.current.focus()
            }if(e.target.name == "pass"){
                submitHandle()
            }
        }
    }

  return (
    <>

      
    <Navbar/>
    <div className="all-login-con m-0">
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className='form'>
        <h3 className='pay3'> فرم  ورود </h3>

        <label htmlFor="username">نام کاربری</label>
        <input type="text" placeholder="مثال : mani norouzi"  onChange={inpHandle} name='user' onKeyDown={enterHandle} autoComplete='off'/>

        <label htmlFor="password">رمز ورود</label>
        <input type="password" placeholder="مثال : aknsacjdo2132$32@" onChange={inpHandle} name='pass' onKeyDown={enterHandle} ref={passRef} autoComplete='off'/>

        <button type='button' className='pay3' onClick={submitHandle} > ورود </button>

      </div>
    </div>
    </>
  );
}
