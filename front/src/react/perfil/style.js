import styled from 'styled-components';


const DivContainer = styled.div`
    padding:100px 0px;
    display:flex;
    justify-content:center;
`
const DivCard = styled.div`
    border:1px solid #cccccc;
    width:40%;
    height:400px;
    align-items:flex-start;
    justify-content:flex-start;
    display:flex;
    flex-direction:column;
    box-shadow: 10px 7px 12px 0px rgba(204,204,204,1)
`

const DivTitle = styled.div`
    width:100%;
    height:200px;
    background-image:url("https://archzine.es/wp-content/uploads/2019/07/adorables-fotos-de-fondos-de-pantalla-del-mar-playa-isla-rocas-arena-palmeras-agua-azul-cielo-nubes-palmeras-sol-fondos-pantalla-gratis.jpeg");
    background-position:center;
    background-size:cover;
`
const DivImgPerfil = styled.div`
    width:20%;
    height:200px;
    position:relative;
    top:125px;
    left:40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Img = styled.img`
    width:70%;
    height:60%;
    border-radius:50%;
`

const H3 = styled.h3`
    display:inline-block;
    &::first-letter{
        text-transform:uppercase;
    }
`

export { DivContainer, DivCard, DivTitle, DivImgPerfil, Img, H3 } 