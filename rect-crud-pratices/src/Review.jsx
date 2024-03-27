import React, { useState } from 'react';

const ReviewAndRating = () => {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || rating.trim() === '') {
      alert('Title and Rating are required fields.');
      return;
    }
    const newReview = {
      title: title,
      rating: rating,
      description: description,
    };
    setReviews([...reviews, newReview]);
    // Clear form fields after submission
    setTitle('');
    setRating('');
    setDescription('');
  };

  const handleReset = () => {
    setTitle('');
    setRating('');
    setDescription('');
  };

  return (
    <div>
      <div>
        <h2>Give Review</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title*:</label>
            <input id="title" type="text" value={title} onChange={handleTitleChange} required />
          </div>
          <div>
            <label htmlFor="rating">Rating*:</label>
            <input id="rating" type="number" min="1" max="5" value={rating} onChange={handleRatingChange} required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>Title:</strong> {review.title}<br />
              <strong>Rating:</strong> {review.rating}<br />
              {review.description && <><strong>Description:</strong> {review.description}<br /></>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewAndRating;
