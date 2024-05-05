import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Mars.css'

function ElementCard(cardData) {
  return (
    <div className='card-container'>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={cardData.cardData.img_src} style={{objectFit: 'cover', height: '15rem'}}/>
        <Card.Body>
            {/* <Card.Title>{cardData.cardData.id}</Card.Title> */}
            <Card.Text>
                <div className='text-camera'>{cardData.cardData.camera.full_name}</div>
                <div className='text-rover'>{cardData.cardData.rover.name}</div>
                <div className='text-rover'>{cardData.cardData.earth_date}</div>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    
  );
}

export default ElementCard;