import { Button, Card, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Item(props){
    const nav = useNavigate()
    const goToDetail = ()=>{
        nav(`/orders/${props.id}/`)


    }


    return (
        <Col md={4} xs={12}>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.order_name}</Card.Title>
                    <Button variant="primary"  onClick = {goToDetail} >Xem chi tiet</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
