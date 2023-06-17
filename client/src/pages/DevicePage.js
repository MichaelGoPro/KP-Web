import React from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: "Iphone", price: 20, img: ""}

    return (
        <Container className="mt-4">   
            <Row>
                <Col md={6}>
                    <Image width={400} height={400} src={device.img}/>
                </Col>
                <Col md={6}>
                    <Card 
                        className="d-flex align-items-center justify-content-around"
                        style={{ width:250, height:300, fontSize: 32, border: '5px lightgray solid'}}
                    >
                        <h2>{device.name}</h2>
                        <h3>{device.price} $</h3>
                        <Button variant={"outline-dark"} style={{width: 200, fontSize: 28, fontWeight: 5000}}>Add</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;