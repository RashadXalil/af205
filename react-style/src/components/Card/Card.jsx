import React from 'react'
import './Card.scss'
import { StyledButton } from '../../utils/utils'
const Card = () => {
    return (
        <div className="card">
            <div className='card__header'>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
            </div>
            <div className='card__body'>
                <h2>Card Header</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde iste delectus esse, odit voluptatem doloribus nostrum libero recusandae? Aliquam, eos!</p>
                <StyledButton>readme</StyledButton>
                <StyledButton>FRC</StyledButton>
            </div>
        </div>
    )
}

export default Card