import React from 'react';
import URLForm from './components/URLForm';
import URLList from './components/URLList';

const App = () => {
  const [links, setLinks] = React.useState([]);

  const handleShorten = (newLink) => {
    if (links.some(link => link.code === newLink.code)) {
      alert('Shortcode already exists!');
      return;
    }
    setLinks([...links, newLink]);
  };

  return (
    <div>
      <h1>React URL Shortener</h1>
      <URLForm onShorten={handleShorten} />
      <URLList links={links} />
    </div>
  );
};

export default App;
