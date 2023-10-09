import { Router, useRouter } from 'next/router'
import React, { useEffect } from 'react'

const page = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push('/')
  },[])
  return (
    <div>You're Being Re-Diredcted to The Main Page...</div>
    )
}

export default page