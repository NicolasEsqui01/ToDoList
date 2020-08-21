import React from "react";
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
  Iconos,
  Popup
} from "./styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
  activar
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
            <InputSubmit type="submit" value="enter"></InputSubmit>
          </Form>
        </DivAgregarNota>
      )}
      {search.length ? (
        <DivHijo>
          <DivNotas>
            {search.map(element => {
              return (
                <Div key={element.id} status={element.status}>
                  <DivH1>
                    <DivCaja>
                      <H1>{element.title}</H1>
                      <DivIcons>
                        <Iconos>
                          <FontAwesomeIcon
                            icon={faEdit}
                          />
                        </Iconos>
                        <Iconos>
                          <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => handleElinacion(element.id)}
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
                      <Div key={element.id} status={element.status}>
                        <DivH1>
                          <DivCaja>
                            <H1>{element.title}</H1>
                            <DivIcons>
                              <Iconos>
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  onClick={() => handleActivar(1)}
                                />
                              </Iconos>
                              <Iconos>
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  onClick={() => handleDelete(element.id)}
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
              <Popup Activar={activar}>
                <div>
                  <button onClick={()=> handleActivar(0)}>x</button>
                </div>
                <form>
                  <div>
                    <label></label>
                    <input type="text"/>
                  </div>
                  <div>
                    <label></label>
                    <input type="text"/>
                  </div>
                  <input type="submit"/>
                </form>
              </Popup>
            </>
          ) : null}
        </>
      )}
    </DivContainer>
  );
};
