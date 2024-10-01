import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/MoviesApiComponent.css';
import PaginationModel from './PaginationModel';

const MoviesApiComponent = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearchTerm, setFilteredSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState(''); // New state for rating
  const moviesPerPage = 8;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://freetestapi.com/api/v1/movies');
        const uniqueMovies = Array.from(new Set(response.data.map(movie => movie.id)))
          .map(id => response.data.find(movie => movie.id === id));
        setMovies(uniqueMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Reset currentPage when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredSearchTerm, selectedGenre, selectedRating]);

  // Filter movies based on selected genre, search term, and selected rating
  const filteredMovies = movies.filter(movie => {
    const movieGenres = Array.isArray(movie.genre) ? movie.genre : [movie.genre];
    const matchesGenre = selectedGenre 
        ? movieGenres.some(genre => genre.toLowerCase() === selectedGenre.toLowerCase()) 
        : true;

    const matchesTitle = filteredSearchTerm 
        ? movie.title.toLowerCase().includes(filteredSearchTerm.toLowerCase()) 
        : true;

    const matchesRating = selectedRating 
        ? movie.rating > parseFloat(selectedRating) // Adjust filtering based on rating
        : true;

    return matchesGenre && matchesTitle && matchesRating; // Return true if all conditions are met
  });

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') return;
    setFilteredSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredSearchTerm('');
      setCurrentPage(1);
    }
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setCurrentPage(1);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
    setCurrentPage(1);
  };

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='movies'>
      <h2 className="headingTwo" style={{ margin: '20px 20px' }}>filmeCue - Watch Online Free Movies</h2>
      
      {/* Search Input and Button */}
      <div style={{ margin: '20px' }}>
        <input
          type="text"
          className="search-field"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</button>
      </div>

      {/* Genre and Rating Dropdowns */}
      <div className="dropdown-container">
        <div className="genre-dropdown">
          <label htmlFor="genre-select" className="genre-label">Select Genre:</label>
          <select
            id="genre-select"
            className="genre-select"
            value={selectedGenre}
            onChange={handleGenreChange}
            placeholder="Select Genre"
          >
            <option value="drama">Drama</option>
            <option value="crime">Crime</option>
            <option value="action">Action Crime Drama</option>
            <option value="romance">Drama Romance</option>
            <option value="sci-fi">Action Sci-Fi</option>
            <option value="adventure">Adventure Drama Fantasy</option>
            <option value="thriller">Action Thriller</option>
            <option value="war">Drama War</option>
            <option value="animation">Animation Adventure Drama</option>
            <option value="history">Drama History War</option>
            <option value="mystery">Drama Mystery Sci-Fi</option>
          </select>
        </div>

        <div className="rating-dropdown">
          <label htmlFor="rating-select" className="rating-label">Select Rating:</label>
          <select
            id="rating-select"
            className="rating-select"
            value={selectedRating}
            onChange={handleRatingChange}
            placeholder="Select Ratings"
          >
            <option value="7.5">Over 7.5</option>
            <option value="8.5">Over 8.5</option>
            <option value="9.5">Over 9.5</option>
          </select>
        </div>
      </div>

      {/* Display filtered movies */}
      {filteredMovies.length === 0 ? (
        <p style={{ color: 'blue', fontWeight: 'bold' }}>No movies available</p>
      ) : (
        <div className="movies-container">
          {currentMovies.map(movie => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.poster || 'default-poster-url.jpg'} alt={`${movie.title} poster`} />
              <h3>{movie.title}</h3>
              <p>Year: {movie.year}</p>
              <p>Genre: {Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre}</p>
              <p>Plot: {movie.plot}</p>
              <p>Country: {movie.country}</p>
              <p>Rating: {movie.rating}</p>
              <p>Director: {movie.director}</p>
              <p>Actors: {movie.actors}</p>
              <button className='watch-button' onClick={() => window.open(movie.website, '_blank')}>Watch</button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Component */}
      <PaginationModel
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MoviesApiComponent;
