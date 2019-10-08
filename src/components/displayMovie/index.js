import React   from "react"
import { WrapperMovie, WrapperImg, WrapperInfos } from "./style"

const DisplayMovie = ({movie}) => {
    return (
        <WrapperMovie>
            <WrapperImg src={movie.Poster}></WrapperImg>
            <WrapperInfos>
                <div>{movie.Title}</div>
                <div>{movie.Year}</div>
            </WrapperInfos>
        </WrapperMovie>
    )

}

export default DisplayMovie