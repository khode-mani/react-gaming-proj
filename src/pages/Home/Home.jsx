import { Button, Col, Container, Row } from "react-bootstrap";
import ScrollCountUp from "../../components/countUp/CountUp";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import gamepad1 from "../../assets/images/gamePad-compressed.webp";
import { MdGamepad } from "react-icons/md";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import SimpleSwiper from "../../components/carousel/Carousle";
import pubgImg from '../../assets/images/carousle/pubg.jpg';
import rainbowImg from '../../assets/images/carousle/rainbow.jpg';
import warzoneImg from '../../assets/images/carousle/warzone.jpg';
import worldMap from '../../assets/images/svg/world-map.webp';
import CommentCard from "../../components/commentCard/commentCard";
import { useState } from "react";
import { commentData } from "../../commentData";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import GoUp from "../../components/GoUp/GoUp";
import SimpleSwiper from "../../components/carousel/carousle";

export default function Home() {

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  let [comment , setComment] = useState(commentData)

  return (
    <>
      <GoUp/>
      <Navbar />
      <section className="banner ">

        <Container className="py-5  py-lg-0 px-3">
          
          <Row className=" p-lg-5 py-5 py-lg-0 g-0"  >

            <Col className="right col-12 col-lg-6"
             data-aos="zoom-out-left"
             data-aos-delay="500"
             data-aos-mirror="true"
             >
              <h1 className="banner-title pay3 ">

                فروش انواع بازی ها  و  <span className="en">DNS</span> های گیمینگ
                
                <MdGamepad className="gamepadBtn"/>
              </h1>


            </Col >

            <Col className="left col-12 col-lg-6 ">

                <ParallaxProvider>
                  <Parallax speed={50}>
                    <img src={gamepad1} alt="" />      

                  </Parallax>
                  </ParallaxProvider>



            </Col>
          </Row>
        </Container>
      </section>

      <section className="carusle">

          <Container>

              <SimpleSwiper first={pubgImg} second={warzoneImg} third={rainbowImg}/>

          </Container>

      </section>

      <section className="map">
        
        <Container >

          <h1 className="pay2"
             data-aos="zoom-left"
             data-aos-delay="100"
          >تعداد کاربران ما در سراسر جهان</h1>

          <div className="countUp-con ">

              
                  <img src={worldMap} alt="" className="world-map"/>

                  <div className="count-con">

                      <ScrollCountUp  end={10_000_000} duration={7}/>
                      <span className="pay2">+ نفر </span>
                  </div>
                  
          </div>

        </Container>


      </section>

      <section className="comment-card-sec pb-5">
          
          <Container>
            <Row className="row-cols-1  row-cols-xl-2 gx-0 gx-lg-5 ">

              {
                comment.map((item)=>(
                  
                  <Col key={item.id}
                    data-aos="zoom-left"
                    data-aos-delay="100"
                    data-aos-mirror='true'
                  >

                    <CommentCard {...item}/>

                  </Col>
                ))
              }

            </Row>
            
            <div className="a-con">
              <Link  className="pay3">
                بازیکنان بیشتر
              </Link>
            </div>

          </Container>
          
      </section>
      
      <footer className="pt-5">
        <Footer/>
      </footer>



    </>
  );
}
