import React, { useState } from "react";
import {
  DivContainer,
  DivCard,
  DivTitle,
  DivImgPerfil,
  Img,
  H3
} from "./style";

const Perfil = ({ profile, handleSubmit }) => {
  return (
    <DivContainer>
      <DivCard>
        <DivTitle>
          <DivImgPerfil>
            <Img src={profile.img} alt="#" />
            <H3>{profile.name} </H3>
          </DivImgPerfil>
        </DivTitle>
      </DivCard>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label></label>
            <input type="file" />
          </div>
          <input type="submit" value="agregar" />
        </form>
      </div> */}
    </DivContainer>
  );
};

export default Perfil;
