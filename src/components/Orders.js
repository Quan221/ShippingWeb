import React, { useState, useEffect } from 'react';
import { Container, Row,  Spinner } from 'react-bootstrap';
import Apis, { authApi, endpoints } from '../config/Apis';
import Item from './Item';

export default function Orders() {
    const [orders, setOrders] = useState([])
    

    useEffect(() => {
        const loadOrders = async () => {
            
            const res = await authApi().get(endpoints['orders'])
            setOrders(res.data)
        }

        loadOrders()
    }, [])

    return (
        <Container>
            <h1 className="text-center text-danger">DANH SACH ORDER</h1>
            
            {orders.length === 0 && <Spinner animation="grow" />}
            
            <Row>
                {orders.map(c => {
                    return <Item  image={c['image']} order_name={c['order_name']} />
                })}
            </Row>
        </Container>   
    )
}

