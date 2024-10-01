import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

const Header = ({ onSearch, onGenreSelect }) => { 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle dark mode by adding/removing class to/from body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Call the onSearch prop
      setSearchTerm(''); // Clear input field
    } else {
      setShowAlert(true); // Show alert if input is empty
    }
  };  

  const handleCloseAlert = () => {
    setShowAlert(false); // Close the alert modal
  };

  // Define the handleGenreChange function
  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    onGenreSelect(selectedGenre); // Call the onGenreSelect prop with the selected genre
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1 style={{ display: 'flex', alignItems: 'center' }}>
            <span className="icon">
              <FontAwesomeIcon icon={faVideoCamera} style={{ color: 'red' }} />
            </span>
            FilmeCue
          </h1>
        </div>

        <nav className="navigation">
          {/* Commenting out the dark mode toggle slider */}
          {/* <div className="dark-mode-option">
            <div className="toggle">
              <input 
                type="checkbox" 
                checked={isDarkMode} 
                onChange={handleToggleDarkMode} 
                id="dark-mode-toggle" 
                aria-label="Toggle Dark Mode"
              />
              <label htmlFor="dark-mode-toggle" className="slider"></label>
            </div>
          </div> */}

          <Link to="/">Home</Link>
          <Link to="/movies-api">New Series</Link>

        </nav> 

        {showAlert && <AlertModel message="Please enter your keyword." onClose={handleCloseAlert} />}
      </header>
    </>
  );
};

export default Header;
