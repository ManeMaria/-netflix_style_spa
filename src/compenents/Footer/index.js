import React from 'react';
import { FooterBase } from './styles';
import cesarLogoWithMelhorado from "../../assets/image/cesarLogoWithMelhorado.png"


function Footer() {
  return (
    <FooterBase>
      
        <img className='logo-footer'src={cesarLogoWithMelhorado} alt="Logo cesar" />
      
    </FooterBase>
  );
}

export default Footer;
