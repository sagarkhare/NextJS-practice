import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Link href='rendering_examples/csr'>CSR Page</Link><br/>
    <Link href='rendering_examples/ssr'>SSR Page</Link><br/>
    <Link href='rendering_examples/ssg'>SSG Page</Link><br/>
    <Link href='rendering_examples/isg'>ISG Page</Link><br/>
    </>
  )
}
