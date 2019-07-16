import React from 'react'
import { Container } from 'reactstrap'
import CategoryItem from './CategoryItem'
import './index.scss'
const categoryList = ['Chinese', 'Fast Food', 'Italian', 'Mexican', 'Pizza', 'Wings']
const Categories = props => {
    return (
        <Container className="category pb-5" fluid>
            <div className="pr-3 pl-3 pt-5">
                <h4 className="pb-4">Explore Popular Categories</h4>
                <div className="d-flex justify-content-between">
                    <CategoryItem list={categoryList} />
                </div>
            </div>
        </Container>
    )
}
export default Categories