import React, { useState } from 'react';

const Review = () => {
  const [selectedRating, setSelectedRating] = useState('Satisfied');

  const handleRatingClick = (e) => {
    const target = e.target;
    const ratingContainer = target.parentNode;
    if (ratingContainer.classList.contains('rating') && target.nextElementSibling) {
      removeActive();
      ratingContainer.classList.add('active');
      setSelectedRating(target.nextElementSibling.textContent);
    } else if (
      ratingContainer.classList.contains('rating') &&
      target.previousSibling &&
      target.previousElementSibling.nodeName === 'IMG'
    ) {
      removeActive();
      ratingContainer.classList.add('active');
      setSelectedRating(target.textContent);
    }
  };

  const handleSendClick = () => {
    // Your logic for sending feedback
    console.log('Sending feedback:', selectedRating);
  };

  const removeActive = () => {
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach((rating) => {
      rating.classList.remove('active');
    });
  };

  return (
    <div className="panel-container">
      <strong>How satisfied are you with our <br /> customer support performance?</strong>
      <div className="ratings-container" onClick={handleRatingClick}>
        <div className="rating">
          <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png" alt="" />
          <small>Unhappy</small>
        </div>

        <div className="rating">
          <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png" alt="" />
          <small>Neutral</small>
        </div>

        <div className="rating active">
          <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png" alt="" />
          <small>Satisfied</small>
        </div>
      </div>
      <button className="btn" onClick={handleSendClick}>Send Review</button>
    </div>
  );
};

export default Review;
