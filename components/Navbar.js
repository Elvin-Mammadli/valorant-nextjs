import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo" >
        <Link href="/">
          <div>
            <Image src="/logo.png" width={64} height={64} />
          </div>
        </Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/agents"><a>Agent List</a></Link>
    </nav>
  )
}

export default Navbar;