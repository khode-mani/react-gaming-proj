import'./setProfile.scss'
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../../components/navbar/Navbar';

function SetProfile() {

  const [profileData, setProfileData] = useState({
    name: "",
    profilePicture: null,
  });

  let navigate = useNavigate()
  // بازیابی اطلاعات ذخیره‌شده
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userProfile"));
    if (savedData) setProfileData(savedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData({ ...profileData, profilePicture: reader.result });
    };
    reader.readAsDataURL(file); // تبدیل فایل به Base64 برای ذخیره‌سازی
  };

    const  handleSubmit  = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(profileData)); // ذخیره اطلاعات در localStorage
    
        Swal.fire({
        title: "پروفایل ایجاد شد",
        icon: "success",
        confirmButtonText: "بستن",
    
        
    });
    navigate("/profile");

    // setTimeout(() => {
    //     setProfileData({
    //         name: "",
    //         profilePicture: null,
    //       });
    
    // }, 3000);
};

  // const handleLogout = () => {
  //   Swal.fire({
  //       title: "پروفایل حذف شود؟",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "اره حذفش کن",
  //       cancelButtonText : "نه حذف نکن"
  //     }).then((result) => {

  //       if (result.isConfirmed) {
  //         Swal.fire({
  //           title: "حذف شد!",
  //           icon: "success"
  //         });

  //         localStorage.removeItem("userProfile"); // حذف داده‌های ذخیره‌شده
  //         setProfileData({
  //           name: "",
  //           profilePicture: null,
  //         });
          

  //        navigate('/')
  //       }
  //     });
  // };

  return (
    
    <div className="pt-5 set-prof-all-con" >
        <Navbar/>
      <Container  className='set-prof-con'>
        <div className="card ">
        
        <h1 className='pay3'>ساخت پروفایل</h1>
        <input
          type="text"
          name="name"
          placeholder="نام"
          value={profileData.name}
          onChange={handleInputChange}
          autoComplete='off'
        />

        <label htmlFor="file">انتخاب عکس پروفایل</label>
        <input type="file" onChange={handleFileChange} id='file' autoComplete='off'/>

        {profileData.profilePicture ? (
          <img
            src={profileData.profilePicture}
            alt="Profile Preview"
          />
        )
        :
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mStgAq6UphPdQDqvAGbl9Usi9LSqi1-URQ&s"
        />
    }

        <button type="button" onClick={handleSubmit}>ذخیره پروفایل</button>
        </div>

      </Container>
      {/* <button onClick={handleLogout}>خروج</button> */}
    </div>
  );
}

export default SetProfile;