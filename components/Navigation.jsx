import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="body-padding">
      <div className="pt-4 max-w-4xl relative flex flex-col justify-center w-full min-h-[185px] mx-auto">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="max-w-[225px]">
            <Image
              src="/logo.png"
              alt="Pro solar logo"
              height={306}
              width={754}
            />
          </div>
          <h1 className="mt-4 sm:mt-0 mb-2 sm:mb-0 pl-4 max-w-xl min-w-[459px]">
            Taket ditt er en verdifull ressurs du bør forvalte godt. Prosolar
            bygger og drifter dine solcelleanlegg i samarbeid med våre partnere.
          </h1>
        </div>
        <div
          className="flex items-center justify-between mt-0
      sm:mt-2
      "
        >
          <ul className="flex flex-wrap xs:h-[48px] xs:leading-[48px] items-center">
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
    </nav>
  );
};

export default Navigation;
