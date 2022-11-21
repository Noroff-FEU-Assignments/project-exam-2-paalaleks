import Image from "next/image";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 bg-dark-footer text-primary w-full body-padding h-[340px] flex flex-col justify-evenly">
      <div className=" max-w-4xl mx-auto">
        <p>
          Forskrift om elektrisk utstyr § 21 pålegger oss å informere om at
          installasjonsmateriell ment for å kunne inngå i et fast elektrisk
          anlegg kun kan installeres av en registrert installasjonsvirksomhet.
        </p>
        <h1 className="mt-1">I sammarbeid med:</h1>
      </div>
      <div className="flex flex-wrap justify-around grayscale mx-auto w-full max-w-4xl">
        <div className="p-2">
          <Image width={193} height={43} src="/overland.png" alt="" />
        </div>
        <div className="p-2">
          <Image width={242} height={43} src="/Senergia.png" alt="" />
        </div>
        <div className="p-2">
          <Image width={47.5} height={43} src="/Solar.png" alt="" />
        </div>
        <div className="p-2">
          <Image width={98} height={43} src="/Brevik-elektro.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center">
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
            <a className="link link-hover">epost@epost.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
