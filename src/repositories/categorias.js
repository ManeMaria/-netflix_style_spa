 import  Config  from '../Config/Config';

 
 const URL_CATEGORIES =  `${Config.URL}/categorias`;

 function getAll(){
   return fetch(URL_CATEGORIES)
       .then( async( respostaServer)=> {
          // if (respostaServer.ok){
               const resposta=  await respostaServer.json();    
               return resposta;
          // }
       //throw new Error('error')
   })
 };

    function getAllWithVideos(){
        return fetch(`${URL_CATEGORIES}?_embed=videos`)
            .then( async( respostaServer)=> {
               // if (respostaServer.ok){
                    const resposta=  await respostaServer.json();    
                    return resposta;
               // }
            //throw new Error('error')
        })
      }

 export default{
    getAllWithVideos,
    getAll
 }  