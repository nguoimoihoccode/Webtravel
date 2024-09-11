import { Component } from 'react'
import './Reviews.css'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";


class Reviews extends Component {
    state = {
        activeReviewIndex: 0,
    }

    onClickRightArrow = () => {
        const { activeReviewIndex } = this.state
        const { reviewsList } = this.props

        if (activeReviewIndex < reviewsList.length - 1) {
            this.setState(prevState => ({
                activeReviewIndex: prevState.activeReviewIndex + 1,
            }))
        }
    }

    renderActiveReview = review => {
        const { imgUrl, username, description } = review

        return (
            <div className="review-container">
                <img src={imgUrl} alt={username} className='img img-circle' />
                <p className="username">{username}</p>

                <p className="description-review">{description}</p>
            </div>
        )
    }

    onClickLeftArrow = () => {
        const { activeReviewIndex } = this.state

        if (activeReviewIndex > 0) {
            this.setState(prevState => ({
                activeReviewIndex: prevState.activeReviewIndex - 1,
            }))
        }
    }

    render() {
        const { reviewsList } = this.props
        const { activeReviewIndex } = this.state
        const currentReviewDetails = reviewsList[activeReviewIndex]

        return (
            <div className="app-container bg-light">
                <p className="Reviews">REVIEWS FROM TRAVELERS</p>
                <h1 className='WOT'>What Our Travelers Say About the Trip</h1>
                <div className="carousel-container">
                    <div
                        type="button"
                        onClick={this.onClickLeftArrow}
                        data-testid="leftArrow"
                        className="arrow-button"
                    >
                        <FaRegArrowAltCircleLeft />
                    </div>
                    {this.renderActiveReview(currentReviewDetails)}
                    <div
                        type="button"
                        onClick={this.onClickRightArrow}
                        data-testid="rightArrow"
                        className="arrow-button"
                    >
                        <FaRegArrowAltCircleRight />
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;