import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { UserContext } from "../App"


function Header() {
    
    const [kw, setKw] = useState("")
    const nav = useNavigate()
    const [user, dispatch] = useContext(UserContext)

 

    const search = (event) => {
        event.preventDefault()

        nav(`/?kw=${kw}`)
    }

    const logout = (evt) => {
        evt.preventDefault()
        dispatch({"type": "logout"})
    }

    let btn =<>
     <Link to="/login" className="nav-link text-danger">Dang nhap</Link>
     <Link to="/register" className="nav-link text-danger">Dang ky</Link>

     </>
    if (user != null)
        btn = <>
            <Link to="/" className="nav-link text-danger">{user.username}</Link>
            <a href="#" onClick={logout} className="nav-link text-danger">Dang xuat</a>
            <Link to="/registershiper" className='nav-link text-danger' > Dang Ky Shipper </Link>
            <Link to="/shipperlist/" className='nav-link text-danger' >Shipper</Link>
            <Link to="/oders" className='nav-link text-danger' >Oders</Link>
        </>

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="navbar-brand">e-Course Online</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* {categories.map(c => {
                        const url = `/?category_id=${c.id}`
                        return <Link to={url} className="nav-link">{c.name}</Link>
                    })} */}
                    
                    {btn}
                </Nav>
                <Form className="d-flex" onSubmit={search}>
                    <FormControl
                        type="search"
                        value={kw}
                        onChange={event => setKw(event.target.value)}
                        placeholder="Tu khoa..."
                        className="me-2"
                        aria-label="Search" />
                    <Button type="submit" variant="outline-success">Tim</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header