import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './index.scss'
const Services = props => {
    return (
        <Container className="pt-4 services" fluid>
            <Row className="pl-3 pr-3 pb-3">
                <Col md={4}>
                    <img alt="" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/816084874de4267a8e89c881db968ed2.svg" />
                    <h5>There's more to love in the app.</h5>
                    <p>Get the app:</p>
                </Col>
                <Col md={4}>
                    <img alt="" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bd4c2537aa3799e345a397e7e4c9cbac.svg" />
                    <h5>Your restaurant, delivered</h5>
                    <p className="subtitle">Add your restaurant</p>
                </Col>
                <Col md={4}>
                    <img alt="" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b96045d2e2b2989e7b09200b1c40ab73.svg" />
                    <h5>Deliver the Eats</h5>
                    <p className="subtitle">Sign up to deliver</p>
                </Col>
            </Row>
            <div className="border-bottom ml-3 mr-3"></div>
        </Container>
    )
}

export default Services