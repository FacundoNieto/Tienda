/*este archivo va a ser el primero que se cargue cuando desde la página pages/faq.js o pages/index.js
se llame a la ruta de esta carpeta store. Entonces cuando quieras dirigirte a este archivo store/index.js
no tenés que poner en el href de Link "/store/index.js", solo tenés que poner href = '/store'*/

/* esta página mostrará todos los artículos para vender (camperas, remeras, gorras, etcetc) "store" */
import Layout from "../../components/Layout"
import {getItems} from "../../services/itemService" /*función que creé para el data fetching*/
import Image from "next/image"; /*es un tag de jsx para mostrar imagenes (en lugar de img de html)*/

export default function Index({items}){
  return(
    <Layout>
      <h1>Store</h1>
      {items && 
        items.map((item) => (
          <div key={item.id}> 
            <Image src= {item.image} width = "200" height={200}/>
            {item.title} 
          </div>
      ))} 
    </Layout>
  );
}

/*como queremos mostrar todos los artículos disponibles para vender, tenemos que obtener estos artículos.
  Se supone que esta información está cargada en un archivo JSON, asíque desde acá se IMPLEMENTARÁ una función
  predefinida de nextjs que consulta los datos del archivo JSON, y  así se obtiene un array de objetos que 
  tengan el nombre del artículo, una foto, el precio, una breve descripción...
  ver https://nextjs.org/docs/basic-features/data-fetching/get-static-props donde se explica que por
  definición next te obliga a que esta función retorne algo así:
      return {
         props: {}, // will be passed to the page component as props
      }
      Y PARA QUE ESTO FUNCIONE TENÉS QUE PASAR props (como quieras, podés desestructurarlo) COMO props
      DEL COMPONENTE EN EL CUAL QUERÉS MOSTRAR LA INFORMACIÓN OBTENIDA (en este caso se lo paso al 
      componente "Store" que definí acá arriba)

      Con solo declarar la función getStaticProps ya se ejecuta, entonces lo que retorna (el objeto props)
      ya está disponible para ser usado sin tener que llamar a la función.
  */

export async function getStaticProps(){
  const res = await getItems();

  return {
    props: {
      items: res /*si desestructurás props tenés que poner {items}*/
    }
  }
}