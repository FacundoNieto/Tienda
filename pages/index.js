/*esta página es la de bienvenida de la tienda, "home"*/
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title = 'Bienvenido'>
      <div>Estás en pages/index.js</div>
    </Layout>
  );
}
