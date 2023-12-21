import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';
import copyicon from './copy-icon.png';
function App() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  // this function will work for generate link
  const generateLink = async () => {
    const response = await axios.post('/link', {
      url,
      
      slug
    })

    // const shortUrl = response?.data?.data?.shortUrl
    // setShortUrl(shortUrl)
    // instead of above method we are using below short method to set short url

    setShortUrl(response?.data?.data?.shortUrl)
  };

  const copyShortUrl = () => {

    // this is javacript method use for copy 
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to Clipboard!')
  }
  return (
    <div>
      <h1 className='app-title'>🔗Quick Links</h1>

      <div className='app-container'>
        <div className='link-generation-card'>
          <h2>Link Generation</h2>

          <input type='text'
            placeholder='URL'
            className='user-input'
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
            }} />

          <input type='text'
            placeholder='Slug (optional)'
            className='user-input'
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value)
            }} />

<div className='short-url-container'>
      <input
        type='text'
        placeholder='input-short-url'
        className='user-input'
        value={shortUrl}
        disabled
      />
      <img
        src={copyicon}
        alt='copy-img'
        className='copy-icon'
        onClick={copyShortUrl}
      />
    </div>

          <button
            type='button'
            className='btn-generate-link'
            onClick={generateLink}>
            Do Magic🎆</button>
        </div>

        <div>
          <h2>All Links</h2>
        </div>
      </div>
    </div>
  )
}

export default App