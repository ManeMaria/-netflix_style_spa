import React from "react";
import Menu from "../menu/Menu";
import Footer from "../Footer/index";
import styled from "styled-components";

const Main= styled.main`

background-color: var(--black);
color: var(--white);
flex: 1;
height: 100vh;
padding: 3vh 0% 1vh 0%;
`

function PageDefault({children}){
    return(
        <>
            <Menu/>
                <Main>
                    {children}        
                </Main>
           <Footer/>
        </>
    )
};
export default PageDefault;