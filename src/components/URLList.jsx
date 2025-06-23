import React from 'react';

const URLList = ({ links }) => (
  <ul>
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.original} target="_blank" rel="noopener noreferrer">
          {link.code}
        </a> - Expires in {link.expiresIn} mins
      </li>
    ))}
  </ul>
);

export default URLList;
