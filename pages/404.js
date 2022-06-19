import Link from 'next/link'
import React, { useEffect } from 'react';
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [router])
  return (
    <div className='not-found'>
      <h2>Page not Found</h2>
      <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default NotFound