import styled from "styled-components";
import { scale_up } from './animaciones'

// div general
const Popup = styled.div`
  display: ${({ Activar }) => (Activar === 1 ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  border: 1px solid #cccccc;
  width: 33%;
  height: 300px;
  top: 33%;
  left: 33%;
  z-index: 3;
  background-color: white;
  box-shadow: 8px 10px 5px 0px rgba(204, 204, 204, 1);
  transition: all 0.5s;
  animation: ${scale_up}  0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  border-radius: 10px;
`;
// Div icono
const DivIcono = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ButtonIcono = styled.button`
  position: absolute;
  top: 0;
  outline: none;
  border: 1px solid white;
  background-color: white;
`;

const DivForm = styled.div`
  padding: 30px;
  width: 80%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const Label = styled.label`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  font-family: "Shadows Into Light", cursive;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  &:focus {
    border: 2px solid #4ea6f0;
    cursor: pointer;
  }
`;

const InputSubmit = styled.input`
  margin: 0 auto;
  width: 50%;
  padding:10px;
  outline:none;
  &:focus {
    border: 2px solid #4ea6f0;
    cursor: pointer;
  }
`;

const Textarea = styled.textarea`
  width: 70%;
  height: 40px;
  &:focus {
    border: 2px solid #4ea6f0;
    cursor: pointer;
  }
`;

export {
  Popup,
  DivIcono,
  ButtonIcono,
  DivForm,
  Form,
  DivInput,
  Label,
  Input,
  InputSubmit,
  Textarea
};
