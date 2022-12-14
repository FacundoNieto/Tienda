import Head from 'next/head'
import Menu from './Menu'
import style from '../styles/layout.module.css'

export default function Layout({children, title}){
  return(
    <div>
      <Head>
        <title>Github Merch {title? `| ${title}` :''} </title> {/*si cuando se llama a Layout se le pone una propiedadad title así: <Layout title:'soy un titulo'> </Layout> entonces SÍ IMPRIME EL TÍTULO (a través de una extrapolación usando backticks alt+96 ``), si no se le pasa ninguna propiedad no imprime nada. Buscar info de cómo funciona el operador ternario ? : */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Menu></Menu> {/*es lo mismo que poner <Menu/>*/}


      <div className={style.container}>
        {children}
      </div>
    </div>
  );
}