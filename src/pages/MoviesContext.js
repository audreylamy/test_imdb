import React, { createContext, Component } from "react";

export const MoviesContext = createContext();

export default class MoviesProvider extends Component {

	constructor() {
		super()
		this.state = {
			setMovies: this.setMovies.bind(this),
			movies: "harry potter"
		};
	}

	setMovies() {
	   
	}

	render() {
		return (
        <MoviesContext.Provider value={{...this.state}}>
            {this.props.children}
        </MoviesContext.Provider>
		)
	}
}