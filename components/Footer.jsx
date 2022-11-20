const Footer = () => {
  return (
    <footer className="absolute bottom-0 bg-dark-footer text-primary w-full ">
      <p className="text-sm max-w-4xl mx-auto my-8">
        Forskrift om elektrisk utstyr § 21 pålegger oss å informere om at
        installasjonsmateriell ment for å kunne inngå i et fast elektrisk anlegg
        kun kan installeres av en registrert installasjonsvirksomhet.
      </p>
      <div className="flex items-center grayscale mx-auto w-full py-2 max-w-4xl">
        <h1 className="mr-4">I sammarbeid med:</h1>
        <img src="/overland.webp" alt="" className=" max-h-7 mx-2" />
        <img src="/Senergia.webp" alt="" className=" max-h-7 mx-2" />
        <img src="/Solar.webp" alt="" className=" max-h-7 mx-2" />
        <img src="/Brevik-elektro.webp" alt="" className=" max-h-7 mx-2" />
      </div>

      <div className="body-padding h-48 flex justify-center">
        <div className="mx-auto w-full max-w-4xl flex items-center">
          <div className="max-w-[190px]">
            <img src="/logo-dark.svg" alt="Pro solar logo" />
          </div>
          <div className="ml-4">
            <a className="link link-hover mr-2">Kontakt</a>
            <a className="link link-hover mr-2">Blog</a>
            <a className="link link-hover mr-2">Solcelleplanlegger</a>
            <br />
            <a className="link link-hover">Jobb hos oss </a>
            <br />
            <a className="link link-hover mr-2">epost@epost.com </a>
            <a className="link link-hover">epost@epost.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
