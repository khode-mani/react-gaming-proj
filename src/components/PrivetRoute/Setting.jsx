import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Setting() {
    
    let navigate = useNavigate()
    
  const logoutH = () => {
    document.cookie =
      "username=kakmani; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
    navigate("/login"); 
  };
  return (
    <>
      <Container className="en text-warning ">
        <h1>WELCOME OUR KING</h1>
        <h1>KEEP GOING YO ARE THE BEST</h1>
        <Button onClick={logoutH}>OUT</Button>
        <h1 className="en2" style={{fontSize: "120px"}}>AND DONT FORGET IT <br />
            NEVER GIVE UP...
        </h1>
      </Container>
    </>
  );
}
