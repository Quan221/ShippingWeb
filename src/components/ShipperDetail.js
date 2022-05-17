import { useEffect, useState } from "react"
import { Image, Col, Row, Container, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { authApi, endpoints } from "../config/Apis"

 function ShipperDetail(){
    const {shippersId}= useParams()
    const [shipper,setShipper] = useState([])
    
    useEffect (()=>{
        const loadShipperById = async()=>{
            
            const res = await authApi().get((endpoints['shippers-detail'](shippersId)))

            setShipper(res.data)
           
        }
        loadShipperById()
        console.log(shipper)
     
    }, [] )

    // if (shipper.user===null)

    //     return <>

    //                 <h1 className="text-center" >Chi Tiet Shipper</h1>
    //                 <Spinner animation='border' />

        
        
    //             </>
        
    return (

        <Container>

          <h1 className="text-center text-danger" > Chi tiet Shipper</h1>
          <h2>{shipper.user['first_name']}</h2>
         {/* <Descrip avatar={shipper.user['avatar'] } first_name={shipper.user['first_name'] } email={shipper.user['email']} />   */}
        </Container>
    )




}
export default ShipperDetail
function Descrip (props){
    return(
    <Row>
    <Col>
        <Image src={props.avatar} rounded fluid  />
    </Col>
    <Col>
        <h2> {props.first_name}</h2>
        <p> CMND: {props.identity_number} </p>
        <p>email: {props.email} </p>
    </Col>
</Row>)
}
