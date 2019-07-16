import React from 'react'
import { Container } from 'reactstrap'
import List from './List'
const citiesList = ['Atlanta', 'Dallas-Fort Worth', 'New York City', 'Sacramento', 'Austin', 'Denver', 'Orange County', 'San Diego', 'Baltimore-Maryland', 'Las Vegas', 'Palm Springs', 'San Francisco Bay Area', 'Boston', 'Los Angeles', 'Philadelphia', 'Seattle', 'Charlotte', 'Miami', 'Phoenix', 'Tampa Bay', 'Chicago', 'Minneapolis - St. Paul', 'Portland', 'Washington D.C.']
const Cities = props => {
    return (
        <Container fluid>
            <div className="d-flex justify-content-between pl-3 pr-3 pt-4">
                <h4>Cities Near You</h4>
                <a className="color-green" href="https://www.google.com">View all 500+ cities</a>
            </div>
            <List data={citiesList} />
            <div className="border-bottom ml-3 mr-3 mt-5"></div>
        </Container>
    )
}
export default Cities