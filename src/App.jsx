import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import unsplash from './Api';

function App() {
  const [images, setImages] = useState([]);

  const searchImages = async (term) => {
    try {
      const res = await unsplash.get('/search/photos', {
        params: { query: term },
      });
      setImages(res.data.results);
    } catch (err) {
      console.error('Lỗi API:', err);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={searchImages} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
