import { Col, Container, Row } from 'react-bootstrap';
import footerImg from '../../assets/images/footer.png';
import './Footer.scss'
import {  FaGithub, FaLinkedin, FaTelegram, FaWhatsappSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/images/logo.png';

export default function Footer() {
    

    return(
        <>
            <Container fluid className='bg-dnger p-0 footer-con-org'>
                <div className="top-footer">
                    <img src={footerImg} alt="" />
                </div>
                <div className="footer-con p-4">

                <Row>
                    <Col className='col-12 col-lg-5'>
                        <div className="links">
                            
                            <h2 className='pay2'> ارتباط با ما </h2>
                            <a href="https://t.me/IN_G0DWE_TRUST" target='_blank'>
                                <div className="tel lin pay3">
                                    <FaTelegram />
                                <span> IN_G0DWE_TRUST@ </span>
                            </div>

                            </a>

                            <a href="https://github.com/khode-mani" target='_blank'>
                                <div className="github lin pay3">
                                    <FaGithub />
                                <span> khode-mani </span>
                            </div>

                            </a>

                            <a href="https://wa.me/+989332067945" target='_blank'>
                                <div className="whatsapp lin pay3">
                                    <FaWhatsappSquare />
                                <span> 09332067945 </span>
                            </div>

                            </a>

                            <a href="https://linkedin.com/in/mani-norouzi-5a324826a" target='_blank'>
                                <div className="linkedin lin pay3">
                                    <FaLinkedin />
                                <span> linkedin.com/in/mani-norouzi-5a324826a </span>
                            </div>

                            </a>
                        </div>

                    </Col>

                    <Col className='col-12 col-lg-7'>
                        <div className="created">

                            <h1 className='en2'>Created by☕ and me</h1>
                            <img src={logo}  alt="" />
                        </div>
                    </Col>
                </Row>


                    
                    

                </div>
                <div className="copy-right">
                    <p>تمامی حقوق برای مانـــی نــــوروزی محفوظ است |  &copy; 2025 Mani Gaming. All rights reserved </p>
                </div>
            </Container>

        </>
    );
}