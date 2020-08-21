import styled from "styled-components";
import { shadow_Drop, slide_fwd, tracking_in } from "./animaciones";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0px;
`;
const DivAgregarNota = styled.div`
  border: 1px solid #cccccc;
  height: 180px;
  width: 30%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 8px 10px 5px 0px rgba(204, 204, 204, 1);
`;

const Div = styled.div`
  border: 1px solid #cccccc;
  width: 20%;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 20px;
  border-radius: 30px;
  padding: 20px;
  height: 250px;
  animation: ${shadow_Drop} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  transition: all 0.5s ease-out;
  &:hover {
    animation: ${slide_fwd} 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    border-left: ${({ status }) =>
      status === "pending" ? "20px solid red" : "20px solid blue"};
  }
`;

const DivNotas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const H1text = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  margin-top: 10px;
  animation: ${tracking_in} 3s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const DivHijo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DivTitle = styled.div`
  border-top: 1px solid #cccccc;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  width: 70%;
  &:focus {
    border: 2px solid #4ea6f0;
    cursor: pointer;
  }
`;
const Label = styled.label`
  width: 30%;
  font-size: 25px;
  font-family: "Shadows Into Light", cursive;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Textarea = styled.textarea`
  outline: none;
  width: 70%;
  &:focus {
    border: 2px solid #4ea6f0;
    cursor: pointer;
  }
`;

const InputSubmit = styled.input`
  width: 50%;
  margin: 0 auto;
  outline: none;
  cursor: pointer;
`;
const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const DivH1 = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 20px;
  height: 50px;
`;

const H1 = styled.h1`
  justify-content: flex-start;
  font-size: 20px;
  margin-left: 10px;
`;

const DivCaja = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  border-bottom: 1px solid black;
  width: 100%;
`;

const Parrafo = styled.p`
  margin-left: 30px;
`;
const DivIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

const Iconos = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  height: 10px;
  padding: 15px;
  align-items: center;
  margin: 5px;
  border-radius: 20px;
  transition: all 0.5s;
  &:hover {
    background-color: #cccccc;
  }
`;

const Popup = styled.div`
  display:${({Activar})=> Activar === 1 ? null : 'none'};
  position:absolute;
  border: 1px solid #cccccc;
  width:30%;
  height:300px;
  top:20em;
  left:40em;
  z-index:3;
  background-color: white;
  box-shadow: 8px 10px 5px 0px rgba(204, 204, 204, 1);
  border-radius:10px;
`


export {
  DivContainer,
  DivAgregarNota,
  DivNotas,
  Div,
  H1text,
  DivTitle,
  Input,
  Label,
  Form,
  Textarea,
  InputSubmit,
  DivInput,
  DivH1,
  H1,
  Parrafo,
  Span,
  DivCaja,
  DivIcons,
  DivHijo,
  Iconos,
  Popup
};


let profesor = {
  nombre:'nicolas',
  alumnos:[
    {
      name:'nicolas',
      history:[
        {
          posicionamiento:[],
          distancia:0,
          encesto:true || false
        }
      ],
    }
  ]
}