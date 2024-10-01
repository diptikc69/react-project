import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <p>© 2024 COPYRIGHT: filmeCue</p>
          z<p className="description">filmeCue Movies, Watch Movies(Drama,Comedy... many more) - Watch Movies Online Free. Watch all your favorite movies. All the movies that were ever made.</p>
        </div>

        <div className="footer-section countries">
          <p>COUNTRY</p>
          <ul>
            <li><a href="/movies-api">United States</a></li>
            <li><a href="https://www.imdb.com/search/title/?country_of_origin=GB">United Kingdom</a></li>
            <li><a href="https://www.imdb.com/india/top-rated-indian-movies/">India</a></li>
            <li><a href="https://www.imdb.com/search/title/?title_type=feature&primary_language=zh">China</a></li>
          </ul>
        </div>

        {/* <div className="footer-section more-links">
          <p>MORE</p>
          <ul>
            <li><a href="#top-movies">Top Movies</a></li>
            <li><a href="#top-tv-series">Top TV Series</a></li>
            {/* <li><a href="#movies-imdb8">Movies IMDB ≥ 8</a></li>
            <li><a href="#tvs-imdb8">TV Shows IMDB ≥ 8</a></li> */}
          {/* </ul>
        </div>  */}

        <div className="footer-section contact">
          <p>CONTACT</p>
          <ul className="support-links">
            <li>
              <img src="/images/gmail.png" alt="Gmail" className="icon" />
              <a href="https://www.gmail.com/">filmeCue.movies@gmail.com</a>
            </li>
            <li>
              <img src="/images/facebook.png" alt="Facebook" className="icon" />
              <a href="https://www.facebook.com/">Facebook Support</a>
            </li>
            <li>
              <img src="/images/forum.png" alt="Forum" className="icon" />
              <a href="#forums">Our Forums</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Add horizontal rule and buttons */}
      {/* <hr />
      <div className="footer-buttons">
        <button>watch Movies Online Free</button>
        <button>free Movies Online</button>
        <button>free Movie Streaming</button>
        <button>M4uHD</button>
      </div>
      <hr /> */}
    </footer>
  );
};

export default Footer;
