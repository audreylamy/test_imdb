import React, { useState, useEffect }   from "react"
import { WrapperMovie, WrapperImg, WrapperInfos } from "./style"
import { WithMoviesHoc } from "../../hoc/MoviesHoc"

const Filter = ({context}) => {

    const handleChange = (ev) => {
        context.setFilter(ev.target.value)
    }

    return (
        <select onChange={handleChange}>
            <option defaultValue value="all">All</option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
        </select>
    )

}

export default WithMoviesHoc(Filter)