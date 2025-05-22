import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink} from 'react-router-dom';

function OffCanvasMenu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button 
        variant="light" 
        onClick={() => setShow(true)}
        className="hamburger-btn"
      >
        ☰ 
      </Button>

      <Offcanvas 
        show={show} 
        onHide={() => setShow(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>منوی اصلی</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="mobile-menu">
            <li><NavLink to="/">خانه</NavLink></li>
            <li><NavLink to="/games">بازی‌ها</NavLink></li>
            <li><NavLink to="/store">فروشگاه</NavLink></li>
            <li><NavLink to="/cart">سبد خرید</NavLink></li>
            <li><NavLink to="/login">ورود/ثبت‌نام</NavLink></li>
            <li><NavLink to="/about">درباره ما</NavLink></li>
            <li><NavLink to="/contact">تماس با ما</NavLink></li>
           <h1 className='en'>Created by me <span className='en2'>(mani norouzi)</span></h1>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMenu; // فقط این خط باید باشد