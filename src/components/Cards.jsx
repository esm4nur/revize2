import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards({ eczane }) {
  return (

      <Col className="my-2">
        <Card className="h-100 border-0 shadow">
          
          <Card.Body>
            <Card.Title>{eczane.adi}</Card.Title>
            <p className="text-body-tertiary">{eczane.alt_katego}</p>
            
          </Card.Body>
        </Card>
      </Col>

  );
}

export default Cards;
