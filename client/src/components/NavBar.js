import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color:'white', margin: '10px'}} to={SHOP_ROUTE}> НеВсеИнструменты </NavLink>
                { user.isAuth ? 
                    <Nav className="ml-auto" style={{color:'white', marginLeft: "auto", marginRight: "10px"}}>
                        <Button style={{marginRight: "10px"}}>Admin panel</Button>
                        <Button>Enter</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white', marginLeft: "auto", marginRight: "10px"}}>
                        <Button onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;