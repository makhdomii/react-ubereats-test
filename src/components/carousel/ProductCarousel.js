import React from 'react'
import { Container } from 'reactstrap'
import Carousel from "react-multi-carousel";
// import ProductDetail from './ProductDetail'
import "react-multi-carousel/lib/styles.css";
import { LeftArrow, RightArrow } from './Arrow'
import './index.scss'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const ProductCarousel = props => {
    return (
        <Container className="carousel-product pt-5" fluid>
            <div className=" position-relative">
                <h4 className="carousel-product--title">Food Delivery in San Francisco Bay Area</h4>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                ssr={true}
                infinite={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container pt-5 pb-4"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                customLeftArrow={<LeftArrow />}
                customRightArrow={<RightArrow />}
            >
                {props.data.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="p-3">
                                <img alt="" className="imageItem" src={item.image} />
                                <p>{item.title}</p>
                                <p className="small f14 text-muted">{item.subTitle}</p>
                                <div className="d-flex">
                                    <span className="alert-secondary f14 pl-2 pr-2 mr-1 rounded">20–30 min</span>
                                    <span className="alert-secondary f14 pl-2 pr-2 mr-1 rounded">4.7 <img alt="" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/92367108b11b8ee48b6f29cb3fef2d4d.svg" /> (38)</span>
                                    <span className="alert-secondary f14 pl-2 pr-2 mr-1 rounded">$4.99 Delivery Fee</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
            <div className="border-bottom ml-3 mr-3"></div>
        </Container>
    )
}
export default ProductCarousel