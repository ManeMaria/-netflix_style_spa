import  Config  from '../Config/Config';

const URL_VIDEOS =  `${Config.URL}/videos`;

   function create(objetoDoVideo){
       console.log(URL_VIDEOS);
       return fetch(`${URL_VIDEOS}?_embed=videos`, {
           method: 'POST',
           headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(objetoDoVideo),    
        })
           .then( async( respostaServer)=> {
              // if (respostaServer.ok){
                   const resposta=  await respostaServer.json();    
                   return resposta;
              // }
           //throw new Error('error')
       })
   }

export default{
   create,
} 