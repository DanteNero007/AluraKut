import MainGrid from '../src/components/MainGrid'; 
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet} from '../src/components/lib/AluraKutCommons';
import ProfileRelations from '../src/components/ProfileRelations';
import ANew from '../src/components/ANew';
//const Title = styled.h1`
  //font-size: 50px;
  //color: ${({ theme }) => theme.colors.primary};
//`

function ProfileSideBar(props){
  return(
    <Box style={{gridArea: 'profileArea'}} >
    <img src={`https://github.com/${props.user}.png`} alt="" style={{borderRadius: '8px'}} />
  </Box>
  )
}

export default function Home() {

  const gitHubUser = 'DanteNero007';
  const pessoasFavoritas = 
  [
    'juunegreiros',
    'omariosouto', 
    'peas',
    'rafaballerini' 
  ];
  
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
      bem vindo
    </Box>
    </div>
   
   <div>
    <Box  style={{gridArea: 'profileRelationsArea'}} >
      Comunidade
    </Box>
    
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
