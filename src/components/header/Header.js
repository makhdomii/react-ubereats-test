import React, { Component } from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/logo.svg'
import { MdLocationOn } from 'react-icons/md'
import './index.scss'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSearch: false,
            position: '',
            inputClassName: ''
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    listenToScroll = () => {
        const scroll = document.documentElement.scrollTop
        const showSearch = scroll > 110 ? true : false
        const position = scroll > 0 ? 'scrolled-page' : ''
        const className = showSearch ? 'active-input' : ''
        this.setState({
            showSearch,
            position,
            inputClassName: className
        })
    }
    render() {
        return (
            <Container className="header height80" fluid>
                <div className={`align-items-center d-flex justify-content-between height80 ${this.state.position}`}>
                    <div className="d-flex w-50">
                        <img alt="" src={logo} />
                        <div
                            className={`input-animation align-items-center ml-5 pt-2 pb-2 pr-3 pl-3 ${this.state.showSearch ? this.state.inputClassName : ''}`}
                        >
                            <div>
                                <MdLocationOn />
                            </div>
                            <input type="text" placeholder="Enter delivery address" />
                        </div>
                    </div>
                    <a className="f16" href="google.com" >Sign In</a>
                </div>
            </Container>
        )
    }
}

export default Header