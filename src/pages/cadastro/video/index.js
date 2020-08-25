import React, { useState, useEffect } from 'react';
import useForm from '../../../Hooks/useForm';
import FormField from '../../../compenents/formFilde/FormFilde';
import PageDefault from '../../../compenents/pageDefault/PageDefault';
import '../../home/app.css';
import Button from '../../../compenents/button';
import { Link, useHistory } from 'react-router-dom';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import PropTypes from 'prop-types'

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  //const categoryTitles= categorias.map(({titulo})=>titulo)
  const { handleChange, valores } = useForm({
    titulo: 'Criando um Flappy Bird do ZERO!!!',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  

  return (
    <div className="app">
       
      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          
          return categoria.titulo === valores.categoria
          
        });
        console.log(categoriaEscolhida)
        

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,

        }).then(() => {
          console.log('cadastrado com  sucesso');
          history.push('/');
        });
        
        console.log(videosRepository.categoriaId)
      }}
      >
        <PageDefault>
          <FormField
            label="nome da categoria"
            name="titulo"
            type="text"
            value={valores.titulo}
            onChange={handleChange}
            />
          <FormField
            label="url"
            name="url"
            type="text"
            value={valores.url}
            onChange={handleChange}
            />
          <FormField
            label="categoria"
            name="categoria"
            value={valores.categoria}
            onChange={handleChange}
            //suggestions={categoryTitles}
          />
       
        

          <Button type="submit">
            importar
          </Button>
        </PageDefault>

      </form>

    </div>
  );
}
CadastroVideo.propsDefault={
  suggestions: []
}
CadastroVideo.propType={
  suggestions: PropTypes.arrayOf(PropTypes.string)
}