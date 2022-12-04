import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const Navigation = () => {
  const kontaktBtn = () => {
    setTimeout(() => {
      removeHash();
    }, 1000);
    const removeHash = () => {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    };
  };

  const router = useRouter();

  return (
    <nav className="body-padding">
      <div className="max-w-4xl relative flex flex-col justify-center w-full mx-auto py-5">
        <div className="flex flex-col items-center md:flex-row">
          <div className="max-w-[300px]">
            <Image
              src="/logo.png"
              alt="Pro solar logo"
              height={306}
              width={754}
            />
          </div>
          <div className="pl-0 md:pl-4 pt-2 md:pt-0">
            <h1 className="text-center md:text-left inline-flex">
              Taket ditt er en verdifull ressurs du bør forvalte godt. <br />
              Prosolar bygger og drifter dine solcelleanlegg i samarbeid med
              våre partnere.
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
                onClick={kontaktBtn}
                className={`${
                  router.pathname == "/#kontaktskjema"
                    ? "activeNavLink"
                    : "navLink"
                }`}
              >
                <Link href="/#kontaktskjema">Kontakt</Link>
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
