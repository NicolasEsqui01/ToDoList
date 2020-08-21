import styled from "styled-components";

// Formulario 
const Form = styled.form`
  border:1px solid black;
  padding:8px;
  border-radius:10em;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  margin-right: 10px;
  width: 300px;
`;

const InputSubmit = styled.input`
  outline: none;
  border-radius: 20px;
  border: 1px solid black;
  background: black;
  color: white;
  &:hover {
    background: white;
    color: black;
  }
`;
// imagen
const Img = styled.img`
  
`
// Navbar
const Nav = styled.nav`
  width:100%;
  background-color:#ffffff;
  z-index:1000;
  position:fixed;
  border-bottom:1px solid #cccccc;
`
// DivGenetal 
const DivContainer = styled.div`
  display:flex;
  flex-direction:row;
  max-width:1600px;
  margin:0 auto;
  padding:15px;
  align-items:center;
`
const DivIzquierda = styled.div`
  width:50%;
`
const DivDerecha = styled.div`
  display:flex;
  width:50%;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`
const DivDrowdaunt = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Ul = styled.ul`
  position:absolute;
  background-color:black;
  display:${({activar}) => activar === 1 ? 'flex' : 'none'};
  flex-direction:column;
  align-items:center;
  padding:0;
  margin-top:5px;
  top:100%;
  border-radius:10px;
  overflow:hidden;
  text-align:center;
`
const Li = styled.li`
  list-style:none;
  color:white;
  padding:10px;
  width:100px;
  &:hover {
    color:black;
    background:white;
  }
`


export { Form, Input, InputSubmit, Nav, Img , DivContainer , DivIzquierda , DivDerecha , DivDrowdaunt , Ul , Li};
