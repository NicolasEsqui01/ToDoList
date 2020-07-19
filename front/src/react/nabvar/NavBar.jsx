import React from "react";
import { 
    DivContainer,
    Divform,
    Form,
    Input,
    InputSubmit
} from "./style";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

export default () => {
  return (
    <DivContainer>

        <img src='' alt='#'/>

        <Form>
            <Input type="text" placeholder='search your notes'/>
            <InputSubmit type='submit' value='Search'/>
        </Form>

       <div style={{fontSize:'2em'}} >
        <AccountCircleSharpIcon />
       </div>

    </DivContainer>
  );
};
