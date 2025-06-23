import React, { useState } from 'react';
import URLForm from './components/URLForm';
import URLList from './components/URLList';

const App = () => {
  const [links, setLinks] = useState([]);

  const handleShorten = (link) => {
    const exists = links.some((l) => l.code === link.code);
    if (exists) {
      alert('Shortcode already exists!');
      return;
    }
    setLinks([...links, link]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React URL Shortener</h1>
      <URLForm onShorten={handleShorten} />
      <URLList links={links} />
    </div>
  );
};

export default App;
