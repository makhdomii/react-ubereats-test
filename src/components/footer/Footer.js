import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdGTranslate } from 'react-icons/md'
import Logo from '../../assets/logo-w.svg'
import appStore from '../../assets/appstore.svg'
import playStore from '../../assets/playstore.png'
import './index.scss'

const Footer = props => {
    return (
        <Container className="footer pt-5 pb-5 text-white" fluid>
            <Row>
                <Col md={6}>
                    <div className="d-flex flex-column align-items-start justify-content-between h-100">
                        <img alt="" className="mb-5" src={Logo} />
                        <div className="d-flex">
                            <img alt="" className="footer--mobile mr-3" src={appStore} />
                            <img alt="" className="footer--mobile" src={playStore} />
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col className="d-flex flex-column footer--link f16" md={6}>
                            <a className="mb-4 medium" href="http://www.google.com">About Uber Eats</a>
                            <a className="mb-3 regular" href="http://www.google.com">Read our blog</a>
                            <a className="mb-3 regular" href="http://www.google.com">Buy gift cards</a>
                            <a className="mb-3 regular" href="http://www.google.com">Sign up to deliver</a>
                            <a className="regular" href="http://www.google.com">Add your restaurant</a>
                        </Col>
                        <Col className="d-flex flex-column footer--link " md={6}>
                            <a className="mb-4 medium" href="http://www.google.com">Get Help</a>
                            <a className="mb-3 regular" href="http://www.google.com">Read FAQs</a>
                            <a className="mb-3 regular" href="http://www.google.com">View all cities</a>
                            <a className="regular" href="http://www.google.com"><MdGTranslate />English</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="border-white mt-5 mb-5" />
            <Row>
                <Col md={6}>
                    <p>© 2019 Uber Technologies Inc.</p>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-between footer--link regular">
                        <a href="https://www.google.com">Privacy Policy</a>
                        <a href="https://www.google.com">Terms of Use</a>
                        <a href="https://www.google.com">Pricing</a>
                    </div>
                    <div className="mt-5 pb-5">
                        <FaFacebookSquare className="mr-4" color="#fff" />
                        <FaTwitter className="mr-4" color="#fff" />
                        <FaInstagram className="mr-4" color="#fff" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer