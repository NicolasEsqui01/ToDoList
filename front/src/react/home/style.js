import styled from 'styled-components'

export const DivContenedor = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`


export const DivContainer = styled.div`
    border: 1px solid white;
    border-radius:15px;
    padding:20px;
    width:40%;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:white;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Input = styled.input`
    width:400px;
    outline:none;
    border:none;
    border-bottom:1px solid black;
    &:hover{
        border-bottom:1px solid blue;
    }
`

export const ButtonSubmit = styled.input`
    border-radius:15px;
    background-color:black;
    border:1px solid black;
    outline:none;
    width:90px;
    height:30px;
    color:white;
    &:hover{
        background-color:white;
        border:1px solid black;
        color:black;
    }
`

export const Label = styled.label`
    font-size:20px;
    margin-right:15px;


`
export const DivLabel = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:20px;
`

export const Title = styled.h1`
    font-size:60px;
    font-style: oblique;
`

export const DivTitle = styled.div`
    display:flex;
    justify-content:center;
    margin-top:70px
`


export const SubTitle = styled.h2`
    font-size:35px;
    text-align:center;
    margin-bottom:60px;
`

export const TagA = styled.a`
    text-decoration:none;
    padding:10px;
    color:black;
    &:hover{
        color:red;
    }
`

export const DivBottom = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

export const MessageError = styled.span`
    color:red;
`