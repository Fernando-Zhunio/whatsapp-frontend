import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Chat from './chat'

export default function Home() {
  return (
    <div className='w-full'>
      <div className="container m-auto">
        <Chat/>
      </div>
    </div>
  )
}
