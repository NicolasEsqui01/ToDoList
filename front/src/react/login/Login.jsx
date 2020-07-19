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
import {Alert , AlertTitle} from '@material-ui/lab';

export default ({handleSubmit , handleChange , err}) => {
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
            
            {err !== '' ? 
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {err}
              </Alert>
            : null }

          </DivContainer>
        </DivContenedor>
      </>
    )
};