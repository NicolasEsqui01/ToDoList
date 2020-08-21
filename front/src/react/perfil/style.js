import styled from 'styled-components';


const DivContainer =styled.div`
    padding:80px 0px;
    display:flex;
    justify-content:center;
`
const DivCard = styled.div`
    border:1px solid black;
    width:300px;
    height:400px;
    padding:40px;
    align-items:flex-start;
    justify-content:flex-start;
    display:flex;
    flex-direction:column;
`

const DivTitle = styled.div`
    display:flex;
    justify-content:center;
`

const DivItems = styled.div`
`

const Strong = styled.strong`
    &::first-line{
        text-transfrom:uppercase;
    }
`
// first-letter = Se utiliza para darle un estilo especial a la primera letra de un texto.
const Parraro = styled.p`
    display:inline-block;
    &::first-letter{
        text-transform:uppercase;
    }
` 


export { DivContainer , DivCard , DivTitle , DivItems, Strong , Parraro } 