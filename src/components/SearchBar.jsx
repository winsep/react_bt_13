import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Tìm kiếm ảnh..." 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
}

export default SearchBar;
