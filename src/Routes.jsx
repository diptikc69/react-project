import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import MoviePage from './components/MoviePage';
import MovieDetail from './components/MovieDetail';


const AppRoutes = ({ movies }) => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<MainComponent onSearch={handleSearch} />} />
        <Route path="/movies-api" element={<MoviesApiComponent />} />
        <Route path="/" element={<HomeComponent movies={movies} />} />
        <Route path="/movies" element={<MoviePage movies={movies} />} />
        <Route path="/movies/:movieId" element={<MovieDetail movies={movies} />} />
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignupForm />} /> 
       
      </Routes>
    </main>
  );
};

export default AppRoutes;
