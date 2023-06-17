import React from "react";
import {Container, Form, Card, Button} from 'react-bootstrap'
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: "600px"}} className="p-5">
                <h2 style={{textAlign: "center"}}>{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                    />
                    { isLogin ? 
                        <div style={{textAlign: "center", marginTop: "3px"}}>
                            I have no account.
                            <NavLink to={REGISTRATION_ROUTE}>Register now</NavLink>
                        </div>
                        :
                        <div style={{textAlign: "center", marginTop: "3px"}}>
                            I have an account!
                            <NavLink to={LOGIN_ROUTE}>Enter now</NavLink>
                        </div>
                    }
                    <Button className="m-3" variant={"outline-success"}>
                        {isLogin? "ENTER" : "REGISTER"}
                    </Button>
                </Form>
            </Card>
        </Container>    
    );
};

export default Auth;