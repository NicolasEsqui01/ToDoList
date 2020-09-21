import React from "react";
import {
  DivContainer,
  DivContenedor,
  Form,
  Input,
  ButtonSubmit,
  Label,
  DivLabel,
  Title,
  DivTitle,
  SubTitle,
  TagA,
  DivBottom
} from "./style";
import { Alert, AlertTitle } from "@material-ui/lab";
import validacion from "../../assets/message";

export default ({
  handleSubmit,
  handleChange,
  err,
  email,
  name,
  password,
  borrar,
  nameError,
  emailError,
  passwordError
}) => {
  return (
    <>
      <DivContenedor>
        <DivTitle>
          <Title>Welcome to my To do List</Title>
        </DivTitle>

        <DivContainer>
          <SubTitle>Sing in</SubTitle>

          <Form onSubmit={handleSubmit}>
            <DivLabel>
              <Label>Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                placeholder="Write your name"
              />
            </DivLabel>
            <DivLabel>
              <Label>Email:</Label>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                placeholder="Write your E-mail"
              />
            </DivLabel>
            <DivLabel>
              <Label>Password:</Label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="Type a password"
              />
            </DivLabel>
              
              <ButtonSubmit type="submit" value="Get in" />
          </Form>

          <DivBottom>
            <TagA href="/login">To Access</TagA>
          </DivBottom>
          {err !== "" ? (
            <>
              {email === "" ? (
                borrar()
              ) : (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {err}
                </Alert>
              )}
            </>
          ) : null}

          {/* {nameError ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {validacion.name}
            </Alert>
          ) : null}
          {emailError ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {validacion.email}
            </Alert>
          ) : null}
          {passwordError ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {validacion.password}
            </Alert>
          ) : null} */}
        </DivContainer>
      </DivContenedor>
    </>
  );
};
