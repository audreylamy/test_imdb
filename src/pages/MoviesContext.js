import React, { createContext, Component } from "react";

export const MoviesContext = createContext();

export default class MoviesProvider extends Component {

	constructor() {
		super()
		this.state = {
			setMovies: this.setMovies.bind(this),
			setFilter: this.setFilter.bind(this),
			allMovies: [],
			movies: [],
			filter: null
		};
	}

	setMovies(data) {
	   this.setState({ allMovies: data.Search, movies: data.Search})
	}

	setFilter(filter) {
		if (this.state.movies.length > 0) {
			if (filter === "movies") {
				const res = this.state.allMovies.filter(movie => movie.Type === "movie")
				this.setState({ movies: res })
			} 
			else if (filter === "series") {
				const res = this.state.allMovies.filter(movie => movie.Type === "series")
				this.setState({ movies: res })
			}
			else {
				this.setState({ movies: this.state.allMovies })
			}
		}
	}

	render() {
		return (
        <MoviesContext.Provider value={{...this.state}}>
            {this.props.children}
        </MoviesContext.Provider>
		)
	}
}
