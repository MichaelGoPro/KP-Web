import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap"
import {observer} from "mobx-react-lite"
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color:'white', margin: '10px'}} to={SHOP_ROUTE}> НеВсеИнструменты </NavLink>
                { user.isAuth ? 
                    <Nav className="ml-auto" style={{color:'white', marginLeft: "auto", marginRight: "10px"}}>
                        <Button
                            style={{marginRight: "10px"}} 
                            onClick={() => navigate(ADMIN_ROUTE)}
                            >Admin panel
                            </Button>
                        <Button
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >EXIT
                        </Button>
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