import './Store.scss'
import { Link, useParams } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { gamesList } from "../Games/games json/gamesList"
import { Col, Container, Row } from "react-bootstrap"
import { BiSolidCategory } from 'react-icons/bi'
import { BsCalendarDate, BsCalendarDateFill } from 'react-icons/bs'
import { ImEmbed2 } from 'react-icons/im'
import { MdDevices } from 'react-icons/md'
import Footer from '../../components/footer/Footer'
import GoUp from '../../components/GoUp/GoUp'
import { isLogin } from '../../utils'

export default function Store() {
    
    let param = useParams().gameId
    
    let gameData = gamesList.find(
        item => item.id == param && item
    )
    
    return(
        <>
            <Navbar/>
            <GoUp/>
            <Container className="pt-5 ">
                <div className="store-con mt-5">
                    <div className="top  ">
                        <img src={gameData.img} alt="" />
                        <h1>{gameData.name}</h1>
                    </div>
                    <div className="bottom">
                        <Row className='game-info gy-3 gy-lg-0'>
                            <Col className='col-12 col-lg-3 text-center' >
                                <ImEmbed2 />
                                شرکت سازنده : <span>{gameData.developer}</span>
                            </Col>
                            <Col className='col-12 col-lg-3 text-center'>
                                <BsCalendarDate />
                                تاریخ انتشار : <span>{gameData.year}</span>
                            </Col>
                            <Col className='col-12 col-lg-3 text-center'>
                                <BiSolidCategory />
                                ژانر : <span>{gameData.genre}</span>
                            </Col>
                            <Col className='col-12 col-lg-3 text-center'>
                                <MdDevices />
                                پلتفرم : <span>{gameData.device}</span>
                            </Col>
                        </Row>

                        <div className="game-desc p-4 p-lg-5">
                            {gameData.description}
                        </div>

                    </div>
                    <div className="buy-sec">
                        <h1 className='pay3'>قیمت : <span>{gameData.price.toLocaleString("en-US")}</span> تومان</h1>
                        <Link to={isLogin() ? '' : '/login'}>افزودن به سبد خرید</Link>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}