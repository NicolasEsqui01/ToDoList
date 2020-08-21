import React, { useState } from 'react';
import { DivContainer , DivCard , DivTitle , DivItems, Strong , Parraro} from './style'
import { Parrafo } from '../notas/styles/style';

const Perfil = ({profile}) =>{
  return (
        <DivContainer>
            <DivCard >
                <DivTitle>
                    <h1>Perfil: <strong>{profile.id}</strong></h1>
                </DivTitle>
                <DivItems>
                   <ul>
                       <li>Name: <Parraro>{profile.name}</Parraro></li>
                       <li>Email: <Parrafo>{profile.email}</Parrafo></li>
                   </ul>
                </DivItems>
            </DivCard>
        </DivContainer>
    )
};  


export default Perfil