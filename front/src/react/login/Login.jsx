import React from 'react';
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
} from './style'

export default ({handleSubmit , handleChange}) => {
    return (
        <>
        <DivContenedor>
          <DivTitle>
            <Title>Welcome to my To do List</Title>
          </DivTitle>
  
          <DivContainer>
            <SubTitle>Login</SubTitle>
  
            <Form onSubmit={handleSubmit}>

              <DivLabel>
                <Label>Email:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Write your E-mail"
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

              <ButtonSubmit type="submit" value="Get in"/>

            </Form>
  
            <DivBottom>
              <TagA href="/">Sing in</TagA>
            </DivBottom>
            
          </DivContainer>
        </DivContenedor>
      </>
    )
};