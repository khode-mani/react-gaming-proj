import "./Profile.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../utils";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "react-bootstrap";
import SetProfile from "./setProfile/setProfile";
import { haveProf } from "../../components/PrivetRoute/haveProf";
import Swal from "sweetalert2";

export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin()) {
      navigate("/login");
      return; 
    }
    if (!haveProf()) {
      navigate("/profile/set");
    }
  }, []);
  
  const [profileData, setProfileData] = useState({ name: "", profilePicture: null });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) setProfileData(savedProfile);
  }, []);

  const logoutHandler = () => {
    console.log("mew");
    
    Swal.fire({
      title: "مطمعنی میخوای خارج شی؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "اره ",
      cancelButtonText : "نه "
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire({
          title: "حذف شد!",
          icon: "success"
        });

        localStorage.removeItem("userProfile"); // حذف داده‌های ذخیره‌شده

        document.cookie =
        "username=mani; expires=Thu, 18 Dec 1900 12:00:00 UTC; path=/";

        navigate("/login"); // بعد از خروج هم هدایت بشه

      }
    });

  };

  if (!isLogin()) return null; // تا وقتی که ریدایرکت بشه، هیچی نشون نده

  return (
    <>
        {/* <h1 className="text-light">{profileData.name}</h1>
        <div className="prof-card">

          <img src={profileData.profilePicture} alt="" style={{width:"100px"}}/>  
      
      
          </div> */}


<Navbar/>
      
      <div className="prof-background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className='prof-form'>

            <img src={profileData.profilePicture ? profileData.profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mStgAq6UphPdQDqvAGbl9Usi9LSqi1-URQ&s"} alt="" style={{width: "100px"}}/>

            <h1 className="pay3"> {profileData.name} </h1>

          <button type="button " onClick={logoutHandler} className="delet">
            حذف پروفایل
          </button>
          
      </div>
        
    </>
  );
}
