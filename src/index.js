import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/App";
import "./index.css";
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria/CadastroCategoria'
import { BrowserRouter, Switch, Route} from "react-router-dom";


const Pagina404 = ()=>(<div>Página 4040</div>)
ReactDOM.render(
    <BrowserRouter>
         <Switch>
             <Route path= "/" component={Home} exact/>
             <Route path="/cadastro/video" component={CadastroVideo}/>
             <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
             <Route component={Pagina404}/>
         </Switch>
    </BrowserRouter>,
    document.querySelector("#root")
);