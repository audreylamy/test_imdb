import React        		from "react";
import { MoviesContext } 	from '../pages/MoviesContext';

export const WithMoviesHoc = (Component) => {
    return(
		(props) => {
			console.log(props)
			return (
				<MoviesContext.Consumer>
					{context => <Component {...props} context={context} />}
				</MoviesContext.Consumer>
			);
		}
	)
}