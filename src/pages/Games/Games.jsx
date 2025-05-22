import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import './Games.scss'
import GamesCard from "./games card/GamesCard";
import { useState } from "react";
import { gamesList } from "./games json/gamesList";
import headerImg from '../../assets/images/banner.jpg';
import GoUp from "../../components/GoUp/GoUp";


export default function Games() {
    
    let [gamesData , setGamesData] = useState(gamesList)

    
    return(
        <>
            <GoUp/>
            <Navbar/>
            <div className="games-header py-5">
                <h1 className=" pay3">لیست بازی بازی ها </h1>
                {/* <img src={headerImg} alt="" /> */}
            </div>
            <Container className="pt-5 game-con games-con">
                
                <Row className="row-cols-1 row-cols-lg-2 g-5 gy-5">
                    
                    {/* <GamesCard/> */}
                    {
                        gamesData.map( item =>(
                            <Col key={item.id} 
                            data-aos="zoom-in-down"
                            data-aos-mirror="true"
                            data-aos-delay="50"

                            >
                                
                                <GamesCard {...item}/>
                                
                            </Col>
                        )
                            
                        )
                    }
                </Row>
            </Container>
        </>
    )
}