import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) onSubmit(term);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Tìm kiếm ảnh..."
      />
      <button type="submit">Tìm</button>
    </form>
  );
}

export default SearchBar;
