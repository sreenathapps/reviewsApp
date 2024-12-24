import {Component} from 'react'
import './index.css'
import CarouselItem from '../CarouselItem'

// Write your code here
class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  onClickRightButton = length => {
    this.setState(prevState => {
      let {currentIndex} = prevState
      currentIndex += 1
      if (currentIndex === length) {
        currentIndex = 0
      }
      return {currentIndex}
    })
  }

  onClickLeftButton = length => {
    this.setState(prevState => {
      let {currentIndex} = prevState
      currentIndex -= 1
      if (currentIndex <= 0) {
        currentIndex = length - 1
      }
      return {currentIndex}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    console.log(reviewsList)
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel">
          <button
            className="btn"
            type="button"
            onClick={this.onClickLeftButton.bind(this, reviewsList.length)}
          >
            <img
              className="arrow-icon"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
            />
          </button>
          <ul className="carousel_item">
            <CarouselItem each={reviewsList[currentIndex]} />
          </ul>
          <button
            className="btn"
            type="button"
            onClick={this.onClickRightButton.bind(this, reviewsList.length)}
          >
            <img
              className="arrow-icon"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
