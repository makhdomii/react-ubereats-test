import React from 'react'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'

const RightArrow = ({ onClick }) => {
    return (
        <button className="arrow right-arrow" onClick={() => onClick()}><MdArrowForward /></button>
    )
}
const LeftArrow = ({ onClick }) => {
    return (
        <button className="arrow left-arrow" onClick={() => onClick()}><MdArrowBack /></button>
    )
}
export { LeftArrow, RightArrow }
