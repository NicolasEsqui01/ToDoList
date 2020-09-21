import React from "react";
import { Link } from "react-router-dom";
import {
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
  Iconos
} from "./styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup/PopupContainer";

export default ({
  handleSubmit,
  handleChange,
  title,
  description,
  notas,
  handleDelete,
  search,
  handleElinacion,
  handleActivar,
  activar,
  idNota,
  booleano,
  bool
}) => {
  return (
    <DivContainer>
      {search.length ? null : (
        <DivAgregarNota>
          <Form onSubmit={handleSubmit}>
            <DivInput>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="I wrote the title"
                onChange={handleChange}
                value={title}
              ></Input>
            </DivInput>
            <DivInput>
              <Label>Description</Label>
              <Textarea
                name="description"
                placeholder="I wrote the description"
                onChange={handleChange}
                value={description}
              ></Textarea>
            </DivInput>
            {!title.length || !description.length ? (
              <InputSubmit type="submit" value="enter" disabled/>
            ) : (
              <InputSubmit type="submit" value="enter" />
            )}
          </Form>
        </DivAgregarNota>
      )}
      {search.length ? (
        <DivHijo>
          <DivNotas>
            {search.map(element => {
              return (
                <Div key={element._id} status={element.status}>
                  <DivH1>
                    <DivCaja>
                      <H1>{element.title}</H1>
                      <DivIcons>
                        <Iconos>
                          <FontAwesomeIcon icon={faEdit} />
                        </Iconos>
                        <Iconos>
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => handleElinacion(element._id)}
                          />
                        </Iconos>
                      </DivIcons>
                    </DivCaja>
                    <Span></Span>
                  </DivH1>
                  <Parrafo>{element.nota}</Parrafo>
                </Div>
              );
            })}
          </DivNotas>
        </DivHijo>
      ) : (
        <>
          {notas.length ? (
            <>
              <DivHijo>
                <DivTitle>
                  <H1text>Notas</H1text>
                </DivTitle>
                <DivNotas>
                  {notas.map(element => {
                    return (
                      <Div key={element._id} status={element.status}>
                        <DivH1>
                          <DivCaja>
                            <H1>{element.title}</H1>
                            <DivIcons>
                              <Iconos
                                onClick={() => handleActivar(1, element._id)}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </Iconos>
                              <Iconos onClick={() => handleDelete(element._id)}>
                                <FontAwesomeIcon icon={faTrash} />
                              </Iconos>
                            </DivIcons>
                          </DivCaja>
                          <Span></Span>
                        </DivH1>
                        <Parrafo>{element.nota}</Parrafo>
                      </Div>
                    );
                  })}
                </DivNotas>
              </DivHijo>
              {idNota ? (
                <Popup
                  start={activar}
                  handleActivar={handleActivar}
                  idNota={idNota}
                  booleano={booleano}
                  bool={bool}
                />
              ) : null}
            </>
          ) : null}
        </>
      )}
    </DivContainer>
  );
};
