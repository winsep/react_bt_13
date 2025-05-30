import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import unsplash from './Api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    setImages(response.data.results);
  };

  return (
    <div>
      <h1>Tìm ảnh với Unsplash API</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
