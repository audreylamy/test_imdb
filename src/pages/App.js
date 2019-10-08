import React            from 'react'
import styled           from 'styled-components'
import GlobalStyles 	  from "../styles/globalStyle"
import DisplayMovies    from '../components/displayMovies';
import SearchBar        from '../components/searchBar';
import MoviesProvider   from  "./MoviesContext"

const App = () => {
  return (
    <React.Fragment>
      {/* <GlobalStyles /> */}
      <MoviesProvider>
        <SearchBar />
        <DisplayMovies />
      </MoviesProvider>
    </React.Fragment>
  );
}

export default App;
