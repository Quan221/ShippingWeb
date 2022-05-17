import { Button, Card, Col } from "react-bootstrap"

export default function Item(props){
    return (
        <Col md={4} xs={12}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.order_name}</Card.Title>
                    <Button variant="primary" >Xem chi tiet</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
