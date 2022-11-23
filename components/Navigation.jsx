import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="body-padding">
      <div className="pt-4 max-w-4xl relative flex flex-col justify-center w-full min-h-[185px] mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="max-w-[230px]">
            <Image
              src="/logo.png"
              alt="Pro solar logo"
              height={306}
              width={754}
            />
          </div>
          <div className="pl-0 md:pl-4 pt-2 md:pt-0">
            <h1 className="text-center md:text-left inline-flex">
              <ImQuotesLeft
                color="currentColor"
                className="mr-2 text-center md:text-left"
              />
              Taket ditt er en verdifull ressurs du bør forvalte godt. Prosolar
              bygger og drifter dine solcelleanlegg i samarbeid med våre
              partnere.
            </h1>

            <ul className="flex flex-wrap items-center justify-center md:justify-start xs:h-[48px] xs:leading-[48px] ">
              <li
                className={`${
                  router.pathname == "/" ? "activeNavLink" : "navLink"
                }`}
              >
                <Link href="/">Forside</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/kontakt" ? "activeNavLink" : "navLink"
                }`}
              >
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/blog" ? "activeNavLink" : "navLink"
                }`}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/ledig-stilling"
                    ? "activeNavLink"
                    : "navLink"
                }`}
              >
                <Link href="/ledig-stilling">Ledig stilling</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/solcelleplanlegger"
                    ? "activeNavLink"
                    : "navLink"
                }`}
              >
                <Link href="/solcelleplanlegger">Solcelleplanlegger</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
