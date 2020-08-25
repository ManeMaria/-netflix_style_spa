import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 2vh 16vw 2vh 14vw;
  text-align: center;
    .logo-footer{
      width: 48px;
      height: 60px;
    }
  @media (max-width: 800px) {
    padding: 3vh 16vw 10vh 14vw;
      .logo-footer{
        width: 48px;
        height: 60px;
      }
  }
`;
