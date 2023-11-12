// NewPost.jsx
import React, { useState } from 'react';
import './NewPost.css';
import axios from 'axios'
export default function NewPost() {

  const [genre, setgenre] = useState('')
  const [quotes, setquotes] = useState('')

  const handleGenreChanges = (e)=>{
    console.log(e.target.value)
    setgenre(e.target.value);

  };

  const handleQuotesChange = (e) =>{
    setquotes(e.target.value);
  };

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    axiosPostData()
    
  };

  const axiosPostData = async()=>{
    const postData = {
      genre:genre,
      quotes:quotes
    }

    await axios.post('http://localhost:4000/allPosts', postData)
    

    
  }

  return (
    <div className="new-post-container">
      <div className="new-post-header">Add your thoughts..</div>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Describe your genre..."
            value={genre}
            onChange={handleGenreChanges}

          />
        </div>
        <br />
        <div className="form-group">
          <label className="form-label" htmlFor="textareaInput">
            Write down your quote
          </label>
          <textarea
            className="form-control"
            id="textareaInput"
            rows="3"
            placeholder='Dump your quotes...'
            value={quotes}
            onChange={handleQuotesChange}
          ></textarea>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
