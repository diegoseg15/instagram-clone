import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/nav-bar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram clone",
  description: "Clon de Instagram con fines educativos",
};

const login = true;

export default function RootLayout({ children }) {
  return (
    <html lang="es-la">
      <head>
        <meta
          id="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://static.cdninstagram.com/rsrc.php/v3/ys/r/aM-g435MtEX.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://static.cdninstagram.com/rsrc.php/v3/yx/r/H1l_HHqi4p6.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://static.cdninstagram.com/rsrc.php/v3/yB/r/-7Z_RkdLJUX.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://static.cdninstagram.com/rsrc.php/v3/yG/r/De-Dwpd5CHc.png"
        />
        <link
          data-default-icon="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico"
          rel="shortcut icon"
          type="image/x-icon"
          href="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico"
        />
      </head>
      <meta name="google" content="notranslate"></meta>
      <body
        className={`${inter.className} w-screen h-screen overflow-x-hidden`}
      >
        {login ? (
          <div className="relative flex sm:flex-row flex-col-reverse h-screen overflow-hidden font-sans">
            <header className="absolute top-0 sm:hidden block overflow-x-hidden py-3 px-4 text-xl font-bold border-b-2">
              <Link href="/">Instagram</Link>
            </header>
            <nav className="absolute bottom-0 sm:h-screen sm:w-full w-screen sm:relative sm:basis-1/12 lg:basis-1/6 bg-white">
              <NavBar />
            </nav>
            <main className="sm:basis-auto lg:basis-1/2 sm:relative absolute top-1">
              {children}
            </main>
            <div className="lg:basis-1/3 lg:block hidden">Sugerencias</div>
          </div>
        ) : (
          <>
            <main>{children}</main>
            <footer className="flex flex-col justify-center items-center w-screen overflow-hidden text-xs text-zinc-500 px-6 pt-2 font-sans">
              <ol className="flex flex-wrap space-x-4 pt-3 pb-5 justify-center text-center">
                <li>
                  <a
                    href="https://about.meta.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Meta
                  </a>
                </li>
                <li>
                  <a
                    href="https://about.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Información
                  </a>
                </li>
                <li>
                  <a
                    href="https://about.instagram.com/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/about/jobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Empleo
                  </a>
                </li>
                <li>
                  <a
                    href="https://help.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Ayuda
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.facebook.com/docs/instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/legal/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/explore/locations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Ubicaciones
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/web/lite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Instagram lite
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Threads
                  </a>
                </li>
                <li>
                  <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT1ttBqhgbI2n0r85EePU4_NDWKEQemWL8kQ7r4F_YJCHCeRrqn5BkQxm8Xoc0FTZIzxjTCKEahI_Hodhn6OX9qSoHrYlrHvA_TbkEAjsDQZQSfZJq9JJFCXsgXCY-srdRtEsw-9TYhl4v5Uouz20A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Subir contactos y no usuarios
                  </a>
                </li>
                <li>
                  <a
                    href="https://about.meta.com/technologies/meta-verified/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:decoration-1 hover:underline-offset-4"
                  >
                    Meta Verified
                  </a>
                </li>
              </ol>
              <ol className="flex flex-row space-x-4 pb-14">
                <li>
                  {/* <select>
                <option
                  className="border-0 w-auto text-xs"
                  value="español"
                  selected
                >
                  Español
                </option>
                <option value="ingles">English</option>
              </select> */}
                </li>
                <li>
                  © 2024 <a>diegoseg_15</a> - Instagram clone
                </li>
              </ol>
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
