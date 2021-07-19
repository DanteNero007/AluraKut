import { SiteClient } from 'datocms-client'


export default async function recebedorDeRequest(request, response){

    if(request.method === 'POST'){
        const TOKEN = 'c1ae643c6a7ae390c50c728dcc2eff';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType:'972862',
            ...request.Body
           /* title:'Vingadores', 
            imageUrl:'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/01/14/captain-america-the-first-avenger-6.jpg',
            creatorSlug:'Dante'
            */
        })
        console.log(registroCriado);
    
        response.json({
            dados: 'algum dado qualquer',
            registroCriado: registroCriado
        })
        return;
    }
    response.status(404).json({
        message: 'Ainda nao tem nada no GET'
    })
}