import type { NextPage } from 'next'
import Link from 'next/link'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <div className="bg-green-500">
    <div>Hola Mundo!</div>
    <Link href='admin/usuarios'>
      <a>Ruta prueba admin usuarios</a>
    </Link>
   </div>
  )
}

export default Home
