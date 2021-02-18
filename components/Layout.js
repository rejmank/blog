import Link from "next/link";
import { useRouter } from "next/router";
import Image from "./Image";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <h1>
      <Link href="/">
        <a className="font-black leading-none text-black no-underline text-4xl  md:text-5xl font-display">
          Rejmank's brain dump
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-2">
      <Link href="/">
        <a className="text-4xl font-black text-black no-underline font-display">
        Rejmank's brain dump
        </a>
      </Link>
    </h1>
  );
  

  return (
    <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
      <header className="text-center flex content-center">
    {isRoot ? <Image
        className="object-scale-down mb-0 mr-3 w-40 h-46"
        src={require("../content/assets/profile.png")}
        webpSrc={require("../content/assets/profile.png?webp")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      />: null}
        {header}</header>
      <main>
        {children}
      
      </main>
      <footer className="text-lg font-light">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://nextjs.org/">Next.js</a>
        &#128293;
        Graphics by <a href="https://vratislavvanecek.wixsite.com/1cha"> Vratislav Vanecek </a>
      </footer>
    </div>
  );
}
