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
  DivBottom,
  MessageError
} from "./style";

export default ({ handleSubmit, handleChange , err}) => {
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
                placeholder="Write your name"
              />
            </DivLabel>
            <DivLabel>
              <Label>Email:</Label>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder={err !== '' ? <MessageError>{err}</MessageError> : "Write your E-mail"}
              />
            </DivLabel>
            <DivLabel>
              <Label>Password:</Label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Type a password"
              />
            </DivLabel>

            <ButtonSubmit type="submit" value="Get in" />
          </Form>

          <DivBottom>
            <TagA href="/login">To Access</TagA>
          </DivBottom>

        </DivContainer>
      </DivContenedor>
    </>
  );
};
