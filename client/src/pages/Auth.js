import React, { useState } from "react";
import {Container, Form, Card, Button} from 'react-bootstrap'
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        if(isLogin){
            const response = await login()
        }else{
            const response = await registration(email, password)
            console.log(response)
        }
    }
    
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                    <Button 
                        className="m-3" 
                        variant={"outline-success"}
                        onClick={click()}
                    >
                        {isLogin? "ENTER" : "REGISTER"}
                    </Button>
                </Form>
            </Card>
        </Container>    
    );
};

export default Auth;