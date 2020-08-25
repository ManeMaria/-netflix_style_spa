import React from "react";
import ManeLogo from "../../assets/image/ManeLogo.png";
import "./menu.css";
import Button from "../button/index";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img  className="Logo" src={ManeLogo}/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}
export default Menu