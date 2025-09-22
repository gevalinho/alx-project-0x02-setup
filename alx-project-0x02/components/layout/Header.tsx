import React from 'react'
import Home from '@/pages'
import About from '@/pages/about'
import Link from 'next/link'
function Header() {
  return (
    <>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    </>
  )
}

export default Header