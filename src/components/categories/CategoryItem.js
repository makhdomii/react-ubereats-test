import React from 'react'

const CategoryItem = props => (
    props.list.map((item, index) => (
        <a key={index} className="category--item" href="http://google.com">
            <div className="category--image"></div>
            <p>{item}</p>
        </a>
    ))
)
export default CategoryItem