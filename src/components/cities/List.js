import React from 'react'
import { Col } from 'reactstrap'
const List = props => (
    <div className="d-flex flex-wrap">
        {
            props.data.map((item, index) => (
                <Col className="mt-2 mb-2" md={3} key={index}>
                    <a className="regular" href={`http://www.google.com/${item}`}>{item}</a>
                </Col>
            ))
        }
    </div>
)

export default List