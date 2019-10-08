import React            from 'react'
import styled           from 'styled-components'
import GlobalStyles 	  from "../styles/globalStyle"
import MoviesList       from '../components/moviesList';
import SearchBar        from '../components/searchBar';
import Filter           from '../components/filter';
import MoviesProvider   from  "./MoviesContext"

const App = () => {
  return (
    <React.Fragment>
      {/* <GlobalStyles /> */}
      <MoviesProvider>
        <SearchBar />
        <Filter />
        <MoviesList />
      </MoviesProvider>
    </React.Fragment>
  );
}

export default App;
