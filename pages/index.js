import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
import Layouts from '../components/layouts'

export default function Home() {
  return (
    <>
    <Layouts title="Home">
      <h1>Estas en el index</h1>
    </Layouts>
    </>
  )
  
}
