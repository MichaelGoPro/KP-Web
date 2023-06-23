import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Context } from "..";
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data =>setDevice(data))
    }, [])

    return (
        <Container className="mt-4">   
            <Row>
                <Col md={6}>
                    <Image width={400} height={400} src={process.env.REACT_APP_API__URL + device.img}/>
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
                {device.info.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10}}>
                            {info.tittle}: {info.description}
                        </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;