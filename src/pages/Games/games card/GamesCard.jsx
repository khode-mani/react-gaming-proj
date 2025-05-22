import { Button } from 'react-bootstrap';
import './GamesCard.scss'
import { Link } from 'react-router-dom';

export default function GamesCard(props) {
    
    return(
        <>
            <div className="games-card ">
                <div className="right">
                    <img src={props.img} alt="" />
                    <span></span>
                </div>

                <div className="left">
                    <h2 className='en2'>{props.name}</h2>
                    <p>پلتفرم : {props.device}</p>

                    <p className='game-price'> قیمت : <span>{props.price.toLocaleString('en-US')} {props.price!== "رایگان" ? "تومان" : ''} </span> </p>

                    <div className="left-btn">

                        <Link className='pay3' to={`/store/${props.id}`}>
                            خرید
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}