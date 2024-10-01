import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import MainComponent from './components/MainComponent';
import MoviesApiComponent from './components/MoviesApiComponent';
// import SearchModel from './components/SearchModel'; 
import './style/styles.css';
import './App.css';
// import AlertModel from './components/AlertModel';

const App = () => {
  // const [showAlert, setShowAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedGenre, setSelectedGenre] = useState(''); 

  const handleSearch = (term) => {
    if (term.trim() === '') {
      setShowAlert(true); 
      setAlertMessage("Please enter your keyword."); 
    } else {
      setSearchTerm(term);  
      // setShowAlert(false); 
    }
  };

  // const handleCloseAlert = () => {
  //   setShowAlert(false);
  // };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre); 
  };

  return (
    <Router>
      <div className="app">
        {/* {showAlert && <AlertModel message={alertMessage} onClose={handleCloseAlert} />} */}

        <Header onSearch={handleSearch} onGenreSelect={handleGenreSelect} />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {/* <MainComponent /> */}
                <MoviesApiComponent/>
                {/* <SearchModel onSearch={handleSearch} /> */}
                {/* GenreModel is removed here */}
              </>
            } 
          />
          <Route 
            path="/movies-api" 
            element={
              <MoviesApiComponent 
                searchTerm={searchTerm} 
                selectedGenre={selectedGenre} 
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
