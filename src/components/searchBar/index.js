import React, { useState, useEffect }   from "react"
import { WithMoviesHoc } from "../../hoc/MoviesHoc"

const SearchBar = ({context}) => {
    console.log(context)

    const [input, setInput] = React.useState("")

    const handleChange = (ev) => {
        setInput(ev.target.value)
    }

    const handleClick = (ev) => {
        ev.preventDefault()
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=f6292e5f&s=' + input + '&y=2000&page=1'
    fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          if (data.Response)
            context.setMovies(data)
        })
      .catch(error => {
        console.log(error)
        })
    }

    return (
        <React.Fragment>
           <input type="text" name="name" value={input} onChange={ev => handleChange(ev)}></input>
           <button onClick={ev => handleClick(ev)}>Valid</button>
        </React.Fragment>
    )
}

export default WithMoviesHoc(SearchBar)