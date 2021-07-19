import React,{useEffect, useState} from 'react'
import MainGrid from '../src/components/MainGrid'; 
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/components/lib/AluraKutCommons';
import ProfileRelations from '../src/components/ProfileRelations';
import ANew from '../src/components/ANew';
import styled from 'styled-components';
import nookies from 'nookies';
import jwt from 'jsonwebtoken'
//const Title = styled.h1`
  //font-size: 50px;
  //color: ${({ theme }) => theme.colors.primary};
//`

function ProfileSideBar(props){
  return(
    <Box style={{gridArea: 'profileArea'}} >
    <img src={`https://github.com/${props.user}.png`} alt="" style={{borderRadius: '8px'}} />
    <hr />
    <a className='boxLink' href={`https://github.com/${props.user}`}>
      {props.user}
    </a>
    <hr />
    <AlurakutProfileSidebarMenuDefault />
  </Box>
  )
}


function ProfileRelationsBox(props){
 console.log(props.item)
  return(
    <>
    <ProfileRelations>
        { 
        props.item.map((itemAtualizado) => (
          <ul style={{marginBottom: '10px' , boxShadow: '3px 3px 15px 5px' ,borderRadius:'8px', listStyle: 'none', backgroundColor:'#ffffff99', padding:'5px', color: '#3399ff', fontWeight: 'bold'}}>
         <a target ='_blank' href ={itemAtualizado.imageUrl}><img src={itemAtualizado.imageUrl} alt= 'seila'/></a>
         <li style={{textAlign:'center', padding:'5px'}} key ={itemAtualizado.title}>{itemAtualizado.title}</li>

        </ul>
        ))
        }
      
      
    </ProfileRelations> 
    </>
  )
}





const ButtonCT = styled.button`
  background-color: #5577ff;
  width: 30%;
`;

export default function Home(props) {

  const gitHubUser = props.githubUser;
  const [comunidades, setComunidades] = useState([]);
  const [comun, setComun] = useState([]);
  const pessoasFavoritas = 
  [
    'juunegreiros',
    'omariosouto', 
    'peas',
    'rafaballerini' 
  ];

  
  function resetar(e){
    e.preventDefault();

    const dadosDoForm = new FormData(e.target);
   
    console.log('Campo: ', dadosDoForm.get('title'));
    console.log('Campo: ', dadosDoForm.get('image'));
    
    const comunidade = dadosDoForm.get('title');

    setComunidades([ ...comunidades, comunidade])
    console.log(comunidades);
  }

  useEffect(() =>{

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers:{
        'Authorization': 'f013669e9b43c47bf2ef53911953ad',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query{
        allCommunities{
        title
        imageUrl
        id
        creatorSlug
        }
      }`
    }
      )
    
    }).then( response => response.json()).then( fullResponse => {
      const comun01 = fullResponse.data.allCommunities;
      console.log(comun01);
      setComun(comun01);
    })
    
    },[])
  
  return( 
    <>
    <AlurakutMenu />
  <MainGrid>
    <div>
      <ProfileSideBar user = {gitHubUser} />
    </div>
   
   <div>
    <Box  style={{gridArea: 'welcomeArea'}} >
      <h1>Bem vindo..a</h1>
      <OrkutNostalgicIconSet/>
    </Box>
    <Box  style={{gridArea: 'welcomeArea'}} >
      <h2>Oque voce deseja fazer</h2>

      <form onSubmit={resetar}>
        <div style={{display: 'flex', justifyContent:'space-around'}}>
      <ButtonCT submit>bot1</ButtonCT>
     
      </div>
      <br />
      <input name='title' placeholder='digite o que vc quer aqui'></input>
      </form>
    </Box>
   
    {//comunidades a abaixo
    }
    <br />
    <Box  style={{gridArea: 'welcomeArea'}} >
      <h2>Crie suas comunidades</h2>
      
      <form onSubmit={function createCommunity(event){
        event.preventDefault();
        const datosDoForm = new FormDato(e.target);

        console.log('Campo:', datosDoForm.get('title'));
        console.log('Campo:', datosDoForm.get('image'));

        const comunidates ={
          
          title: datosDoForm.get('title'),
          imageUrl: datosDoForm.get('image'),
          creatorSlug: 'Dante',
        }
        fetch('/api/comunidades', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(comunidates)
        }).then( async(response) =>{
          const dados = await response.json();
          console.log(dados);
        })

        //const comunidatesAtualizadas = [...comunidades, comunidates];
        //setComunidades(comunidatesAtualizadas)

      }}>
        <div style={{display: 'flex', justifyContent:'space-around'}}>
      <ButtonCT submit>bot1</ButtonCT>
     
      </div>
      <br />
      <input name='title' placeholder='Nome da comunidade'></input>
      </form>
    </Box>
    </div>
  
   <div>
    <Box  style={{gridArea: 'profileRelationsArea'}} >
      Comunidade
    </Box>
    <ProfileRelationsBox item = {comun} />
    <h3  className='smallTitle'>
     Pessoas da Comunidade ({pessoasFavoritas.length})
     </h3> 
    <ProfileRelations>
    {comunidades.map((itemAtual, fim ) =>{
      //<img style={{borderRadius: '8px 8px 0 0' }} src={`https://github.com/${itemAtual}.png`} alt="" />    
        console.log(fim = fim + 120);
      return(
          <>
          <ul style={{listStyle: 'none'}}>
          <ANew href={`https://github.com/${itemAtual}`}>
          <img style={{borderRadius: '8px 8px 0 0' }} src={`https://picsum.photos/id/${fim}/300/300`} alt="" />    
          <li key={itemAtual}>{itemAtual}</li>
          </ANew>
          </ul>
          </>
        )
      })}
    </ProfileRelations> 

    <h3  className='smallTitle'>
     Pessoas da Comunidade ({pessoasFavoritas.length})
     </h3> 
    <ProfileRelations style={{gridArea: 'profileRelationsArea'}} >
   
      {pessoasFavoritas.map((itemAtual) =>{
        return(
          <>
          <ul style={{listStyle: 'none'}}>
          <ANew href={`https://github.com/${itemAtual}`}>
          <img style={{borderRadius: '8px 8px 0 0' }} src={`https://github.com/${itemAtual}.png`} alt="" />    
          <li key={itemAtual}>{itemAtual}</li>
          </ANew>
          </ul>
          </>
        )
      })}
    </ProfileRelations>
    </div>   
  </MainGrid>
  </>
  )
}

export async function getServerSideProps(context){
 
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers:{
      Authorization: token
    }
  }).then((response) => response.json())

  //console.log('isAuthenticated', isAuthenticated)

  if( !isAuthenticated ){
    return {
      redirect:{
          destination:'/login',
          permanent: false
      }
    }
  }

  const {githubUser} =  jwt.decode(token);
  console.log('Cookies', jwt.decode(token) )
  return{
      props:{
          githubUser
      },
  }
}