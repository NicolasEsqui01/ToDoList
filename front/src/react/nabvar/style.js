import styled from 'styled-components';

export const DivContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    height:50px;
    background:white;
    width:100%;
`

export const Form = styled.form`
`


export const Input = styled.input`
    border:none;
    outline:none;
    border-bottom:1px solid black;
    margin-right:10px;
    width:300px;
`
export const InputSubmit = styled.input`
    outline:none;
    border-radius:20px;
    border:1px solid black;
    background:black;
    color:white;
    &:hover{
        background:white;
        color:black;
    }
`