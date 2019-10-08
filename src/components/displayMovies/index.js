import React, { useState, useEffect }   from "react"
import {} from "./style"
import { WithMoviesHoc } from "../../hoc/MoviesHoc"

const DisplayMovies = ({children, context}) => {

	console.log("CONTEXT", context)
    return (
        <React.Fragment>
           "hello"
        </React.Fragment>
    )

}

export default WithMoviesHoc(DisplayMovies)