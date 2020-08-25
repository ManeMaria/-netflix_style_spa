import React, { useState, useEffect } from 'react';
import FormField  from '../../../compenents/formFilde/FormFilde';
import Button from '../../../compenents/button/index';
import useForm from '../../../Hooks/useForm';
import Footer from '../../../compenents/Footer';
import Menu from '../../../compenents/menu/Menu';
import '../../home/app.css';
import { Link } from 'react-router-dom';
import URL from '../../../Config/Config'



export default function CadastroCategoria() {
  const valoresIniciais = {
    name: '',
    descricao: '',
    cor: '#000',
  };

  const {handleChange, valores, limparForm} = useForm(valoresIniciais);
  const [categorias, setCategoria] = useState([]);
  
  

  function handlerOnSubmit(event) {
    event.preventDefault();
    setCategoria([
      ...categorias,
      valores,
    ]);
    limparForm()
  };

  useEffect(()=>{
    
      fetch(URL)
        .then( async( respostaServer)=> {
          const resposta=  await respostaServer.json();
          setCategoria([
            ...resposta,
          ]);
        })
  },[])


  return (

    <div className="app">
      <Menu />
      <main>
     <h1>
        cadastro de categoria: 
      </h1>

      <form onSubmit={handlerOnSubmit}>

        <FormField
          label="nome da categoria"
          name= "name"
          type="text"
          value={valores.name}
          onChange={handleChange}
        />

        <FormField
          label=" descrição"
          name= "descricao"
          type="textarea"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="cor"
          name= "cor"
          type="color"
          value={valores.cor}
          onChange={handleChange}
        />
        <Button>
          cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.titulo}>
            { categoria.titulo }
          </li>
        ))}
      </ul>
      </main>
    <Footer/>
    </div>

  );
}
