import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Apis, { authApi, endpoints } from "../config/Apis";

export default function RegisterCustomer(){
    
    const nav = useNavigate()
    const goToLogin=()=>{


       { nav(`/login/`)}
    }
    const addCustomer = async (event) =>{

        event.preventDefault()
        const res = await authApi().post(endpoints['registercustomer'])
        console.log(res.data)
        goToLogin()
        
        
    }
    
    


    return(
        <>
        <h1 className="text-center text-danger">Get Start</h1>
       
        <Form onSubmit={addCustomer} >

            
            <Button variant="primary" type="submit" className="position ">
                Start
            </Button>
        </Form>
       
        </>
    )





}