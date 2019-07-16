import React from 'react'
import image from '../../assets/sandwich.svg'
import image1 from '../../assets/sandwich-1.svg'
import { Form, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
import { MdLocationOn } from 'react-icons/md'
import './index.scss'
const Slider = props => {
    return (
        <div className="d-flex search-location justify-content-center align-items-center" style={{ backgroundColor: '#F4FCDE' }}>
            <img alt="" className="search-image right-item" src={image} />
            <img alt="" className="search-image left-item" src={image1} />
            <div className="center-box text-center d-flex justify-content-center flex-column">
                <h2 className="pb-5">Restaurants you love, delivered to you</h2>
                <Form className="d-flex justify-content-between">
                    <InputGroup className="align-items-center mr-3 pt-1 pb-1 pl-3 pr-3">
                        <InputGroupAddon addonType="prepend"><MdLocationOn /></InputGroupAddon>
                        <Input placeholder="Enter delivery address" />
                    </InputGroup>
                    <Button className="rounded-0 submit-button">Find Food</Button>
                </Form>
            </div>
        </div>
    )
}
export default Slider