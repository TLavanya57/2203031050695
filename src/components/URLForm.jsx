import React, { useState } from 'react';
import logger from '../utils/logger';

const URLForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expiry = parseInt(validity) || 30;
    const code = shortcode || Math.random().toString(36).substring(2, 8);

    const shortUrl = {
      original: url,
      code,
      expiresIn: expiry,
    };

    onShorten(shortUrl);
    logger('Shortened URL created', shortUrl);

    setUrl('');
    setShortcode('');
    setValidity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />
      <input value={shortcode} onChange={(e) => setShortcode(e.target.value)} placeholder="Custom code (optional)" />
      <input value={validity} onChange={(e) => setValidity(e.target.value)} type="number" placeholder="Validity (min)" />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default URLForm;
