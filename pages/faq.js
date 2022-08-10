/*en esta página se publicará la sección FAQ del proyecto, "FAQ" en el navbar*/

import Link from 'next/link'
import Layout from '../components/Layout';

export default function FAQ(){
  return(
    <Layout>  
      <h1>FAQ</h1>
      <p>Hola</p>
      <Link href='/'>
        <a>
          Ir a Home
        </a>
      </Link>
    </Layout>
  );
}