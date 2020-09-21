import React from "react";
import {
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
} from "./styles/stylePopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const popup = ({
  start,
  handleActivar,
  title,
  nota,
  handleChange,
  handleSubmit
}) => {
  return (
    <Popup Activar={start}>
      <DivIcono>
        <ButtonIcono onClick={() => handleActivar(0)}>
          <FontAwesomeIcon icon={faWindowClose} />
        </ButtonIcono>
      </DivIcono>
      <DivForm>
        <Form onSubmit={handleSubmit}>
          <DivInput>
            <Label>Title</Label>
            <Input
              type="text"
              value={title}
              name="title"
              onChange={handleChange}
            />
          </DivInput>
          <DivInput>
            <Label>Description</Label>
            <Textarea
              type="text"
              value={nota}
              name="nota"
              onChange={handleChange}
            />
          </DivInput>
          <InputSubmit type="submit" value="Guardar" />
        </Form>
      </DivForm>
    </Popup>
  );
};

export default popup;
