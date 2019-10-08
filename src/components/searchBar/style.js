import styled from 'styled-components';
import { move }  from "../styles/animations"

export const WrapperDropzone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 30%;
    height: 200px;
    width: 200px;
    background-color: #fff;
    border: 6px solid #fde483;
    border-radius: 50%;
    overflow: hidden;
    z-index: 2;
`

export const Icon = styled.img`
    position: absolute;
    max-width: ${props => props.width ? props.width : "300px"};
    max-height: ${props => props.height ? props.height : "300px"};
    animation: ${props => props.mouseEnter ? "2s" : "0s" } ${props => props.mouseEnter ? move : null } infinite;
    transition: .2s ease-in-out;
    z-index: 2;
    opacity: .5;
`

export const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
    visibility: ${props => props.allImages ? "visible" : "hidden" }
    z-index: 1;
`

export const WrapperInput = styled.input`
    position: absolute;
    outline: none;
    width: 500px;
    height: 500px;
    z-index: 100;
`

export const WrapperText= styled.div`
    width: 30%;
    height: 15%;
    position: absolute;
    color: black;
    padding: 2px 6px 2px 6px;
    background: #112645;
    opacity: .8;
    border: 1px solid white;
    z-index: 1;
`
