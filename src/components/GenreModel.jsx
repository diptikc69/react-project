import React from 'react';

const GenreModel = ({ genres, onGenreSelect }) => {
  return (
    <div style={{ margin: '20px' }}>
      <select onChange={(e) => onGenreSelect(e.target.value)} style={{ marginTop: '10px' }}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre.toLowerCase()}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreModel;
