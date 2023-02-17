import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Box from '@/components/Box'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

  const [isShown, setIsShown] = useState(true);

  const onClick = () => {
    setIsShown(!isShown);
  }

  const boxAnimation = {
    key: "box",
    initial: {y: "50%", opacity: 0, scale: 0.5},
    animate: {y: 0, opacity: 1, scale: 1},
    exit: {
      y:"50%",
      opacity: 0,
      transition: {duration: 0.1}
    },
    transition: {duration: 0.2, ease: "easeOut"}
  }

  return (
    <>
      <Head>
        <title>Framer-Motion and Intersection Observer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Link href="/">
          <motion.span
            animate={{
              backgroundColor: ["#ff0000", "rgba(0,0,0,0)", "#00ff00"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
          Home Page
          </motion.span>
        </Link>

        <button onClick={() => {onClick()}} className={styles.button}>
          {
            isShown ? "Hide" : "Show"
          }
        </button>

        <AnimatePresence>
          {
            isShown && <motion.div{...boxAnimation} className={styles.box}/>
          }
        </AnimatePresence>

        <Box num={1}/>
        <Box num={2}/>
        <Box num={3}/>
        <Box num={4}/>
        <Box num={5}/>
        <Box num={6}/>
      </main>
    </>
  )
}
