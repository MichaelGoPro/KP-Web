import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: "Iphone", price: 20, img: ""}
    const description = [
        {id:1, tittle: "OP", description: '5gb'},
        {id:2, tittle: "Camera", description: '12 mp'},
        {id:3, tittle: "Processor", description: 'Pentium 3'},
        {id:4, tittle: "Display", description: '400x200'},
        {id:5, tittle: "Accum", description: '4000 mAh'},
    ]
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
            <Row className="d-flex flex-column m-3">
                <h1>Characteristics</h1>
                {description.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10}}>
                            {info.tittle}: {info.description}
                        </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;