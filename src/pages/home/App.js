import React,{useEffect,useState } from "react";
import BannerMain from '../../compenents/BannerMain';
import Carrossel from '../../compenents/Carousel/index';
import "./app.css";
import categoriasRepository from '../../repositories/categorias';
import Footer from '../../compenents/Footer/index';
import Menu from '../../compenents/menu/Menu'

//http://localhost:8080/categorias?_embed=videos

function Home() {
  const [ dadosIniciais, setDadosIniciais]= useState([]);
  useEffect(()=>{
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos)=>{
          setDadosIniciais(categoriasComVideos)
      })
       // .catch((error)=>{
        //    alert(error.message);
        //})
  },[])

  
   return(
      
    <div className="app">
    <Menu />   
      {dadosIniciais.length === 0 &&(<div>Loading...</div>)}
            {dadosIniciais.map((categoria,index)=>{
              if (index === 0){
                return( 
                  <div key={categoria.id}>
                    <BannerMain 
                        videoTitle={dadosIniciais[0].videos[0].titulo}
                        url={dadosIniciais[0].videos[0].url}
                        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
                    />
                    <Carrossel
                        ignoreFirstVideo
                        category={dadosIniciais[0]}
                      />
                  </div>
                );
              }

              return(
                <Carrossel
                  key={categoria.id}
                  category={categoria}
                  />
                )
            })}
          
            {/* <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
                />
                
                <Carrossel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
                />
                
                <Carrossel
                category={dadosIniciais.categorias[1]}
                />
                
                <Carrossel
                category={dadosIniciais.categorias[2]}
                />      
                
                <Carrossel
                category={dadosIniciais.categorias[3]}
                />      
                
                <Carrossel
                category={dadosIniciais.categorias[4]}
                />      
                
                <Carrossel
                category={dadosIniciais.categorias[5]}
                /> */} 
            <Footer />  
    </div>   
           
  )
};
export default Home