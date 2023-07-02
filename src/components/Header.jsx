"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
 
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Mahfuj Github Search</Link>
        </div>
        <div className="links">
          <Link
            href="/about"
            style={{ color: pathName === "/about" ? "red" : "white" }}
          >
            About
          </Link>
          <Link
            href="/about/team"
            style={{ color: pathName === "/about/team" ? "red" : "white" }}
          >
            Our Team
          </Link>
          <Link
            href="/code/repos"
            style={{ color: pathName.startsWith("/code") ? "red" : "white" }}
          >
            Code
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
