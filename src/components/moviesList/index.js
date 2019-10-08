import React, { useState, useEffect }   from "react"
import {} from "./style"
import { WithMoviesHoc } from "../../hoc/MoviesHoc"
import DisplayMovie      from '../displayMovie/index';

const MoviesList = ({children, context}) => {

    if (context.movies.length > 0) {
        return (
            <React.Fragment>
                {
                    context.movies.map((movie, i) => {
                        return(
                            <DisplayMovie key={i} movie={movie}/>
                        )  
                    })
                }
            </React.Fragment>
        )
            
    } else {
        return (
            <React.Fragment>
                hello
            </React.Fragment>
        )
    }
    

}

export default WithMoviesHoc(MoviesList)