import Link from "next/link";
import "./styles.css";

function Header() {
  return (
    <header className="header container mx-auto text-white pt-2">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="logo flex justify-center items-center bg-rose-400 rounded-full"
        >
          <h1 className="font-bold">B</h1>
        </Link>
        <ul className="list-none flex">
          <li className="ml-5 transition-all">
            <Link href="/" className="hover:font-bold transition-all">
              Home
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/products" className="hover:font-bold transition-all">
              Products
            </Link>
          </li>
          <li className="ml-5">
            <Link
              href="https://github.com/joalisonpereira/blog-nextjs-13"
              target="_blank"
              className="hover:font-bold transition-all"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
