import React from 'react';
import './MainContent.css';
import bookImage from '../../Assets/book-icon.png';

export default function MainContent() {
  return (
    <div className='main-content'>
      <div className='main-header'>
        <img src={bookImage} alt="Book Icon" className="book-icon" /> BookSpace
      </div>
      <div className='main-subheading'>
        Join our community of literary enthusiasts and share the magic of words! Whether it's a captivating quote from your favorite novel, a thought-provoking line from a classic, or your own poetic musings, our platform is the perfect space to post and appreciate the beauty of language. Let's bring the world of words together, one quote at a time.
      </div>
      <div className='nav-pills-navigation'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">New Post</a>
          </li>
        </ul>
      </div>
    
    </div>
  );
}
