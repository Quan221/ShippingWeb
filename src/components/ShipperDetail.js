
import { useEffect, useState } from "react"
import { Image, Col, Row, Container, Spinner, Figure, Form,Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { authApi, endpoints } from "../config/Apis"

 function ShipperDetail(){
    const {shippersId}= useParams()
    const [shipper,setShipper] = useState([])
    const [id, setId] = useState()
    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [ avatar, setAvatar]= useState()
    const [ comments,setComments] = useState([])
    const [content,setContent] = useState()

    
    useEffect (()=>{
        const loadShipperById = async()=>{
            
            const res = await authApi().get((endpoints['shipper-detail'](shippersId)))

            setShipper(res.data)
            setId(res.data.user['id'])
            setName(res.data.user['first_name'])
            setEmail(res.data.user['email'])
            setAvatar(res.data.user['avatar'])
            console.log(res.data)

           
        }
        loadShipperById()
     
    }, [] )
    useEffect(() => {
        const loadComments = async () => {
            const res = await authApi().get(endpoints['comment'](shippersId))
            setComments(res.data)
            console.log(comments)
            
        }

        loadComments()
    }, [comments])
    const addComment = async(event)=>{
        event.preventDefault()
        let res = await authApi().post((endpoints['addcomment'])(shippersId),{
            'content' : content, } )
    }
    // if (shipper.user===null)

    //     return <>

    //                 <h1 className="text-center" >Chi Tiet Shipper</h1>
    //                 <Spinner animation='border' />

        
        
    //             </>
        
    return (

        <Container>

          <h1 className="text-center text-danger" > Chi tiet Shipper</h1>         
         <Descrip avatar={avatar} first_name={name } email={email} identity_number={ shipper['identity_number']}/>  
         <Row>
                <Col>
                
                    <Form onSubmit={addComment}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" value={content} onChange={(evt) => setContent(evt.target.value)} placeholder="Your comment..." />
                        </Form.Group>
                        <Button type="submit" variant="primary">Them binh luan</Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ul>
                        {comments.map(c => <li key={c.id}>{c.content} </li>)}
                    </ul>
                </Col>
            </Row>
        </Container>
    )




}
export default ShipperDetail
function Descrip (props){
    return(

    <><Row>
    <Col>
        <Figure>
                <Figure.Image  rounded fluid
                    width={171}
                    height={180}
                    src={props.avatar}
                />
                <Figure.Caption>
                    Shipper ni` dep que iiiii 
                </Figure.Caption>
        </Figure>
    </Col>
    <Col>
        <h2> {props.first_name}</h2>
        <p> CMND: {props.identity_number} </p>
        <p>email: {props.email} </p>
    </Col>
    </Row>
   
    </>
)
}