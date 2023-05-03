import React from 'react';
import profilePng from "../../images/account.png"
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "Tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: review.rating,
        isHalf: true
    }
  return (
      <div className="reviewCard">
          <img src={profilePng} alt="user" />
          <p>{review.name}</p>
          <ReactStars {...options} />
          <span>{ review.comment }</span>
    </div>
  )
}

export default ReviewCard