import React from "react";
import { Form, Input, InputSubmit, Img, Nav, DivContainer, DivIzquierda, DivDerecha, DivDrowdaunt, Ul, Li} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default ({ handleSubmit, handleChange, search, handleClick, valor , handlePerfil , handleLogout , handleImage}) => {
  return (
    <Nav>
      <DivContainer>
        <DivIzquierda>
          <Img src="/" alt="#" onClick={handleImage}/>
        </DivIzquierda>
        <DivDerecha>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="search your notes"
              value={search}
              onChange={handleChange}
            />
            <InputSubmit type="submit" value="Search" />
          </Form>
          <DivDrowdaunt >
            <FontAwesomeIcon icon={faUser} onClick={handleClick} style={{cursor:'pointer',fontSize:'30px'}}/>
            <Ul activar={valor}>
              <Li onClick={handlePerfil}>perfil</Li>
              <Li onClick={handleLogout}>logout</Li>
            </Ul>
          </DivDrowdaunt>
        </DivDerecha>
      </DivContainer>
    </Nav>
  );
};
