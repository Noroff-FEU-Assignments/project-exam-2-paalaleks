import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="body-padding bg-[#1b444d]">
      <div className="max-w-4xl mx-auto w-full py-16">
        <h3 className="text-accent max-w-max">
          Vi realiserer klimamålene dine i dag
        </h3>
        <p className="text-primary mb-8 max-w-max">
          Ta kontakt med oss for næremere informasjon om de tjenestene vi
          tilbyr. Ønsker du en befaring av taket er det fint om du går til{" "}
          <Link href="solcelleplanlegger">
            <a className="link">solcelleplanleggeren</a>
          </Link>{" "}
          slik at vi får den informasjonen vi trenger for å gi deg en pris og
          komme i gang med jobben.
        </p>
        <div className="flex">
          <form className="flex flex-col form-control max-w-md w-full">
            <label className="label" htmlFor="name">
              <span className="label-text text-accent">Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type here"
              className="input w-full max-w-md input-primary"
            />
            <label className="label" htmlFor="email">
              <span className="label-text text-accent">Email</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Type here"
              className="input w-full max-w-md input-primary"
            />
            <label className="label" htmlFor="subject">
              <span className="label-text text-accent">Subject</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Type here"
              className="input w-full max-w-md input-primary"
            />
            <label className="label" htmlFor="message">
              <span className="label-text text-accent">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea min-h-[250px] max-w-md textarea-primary"
              placeholder="Type here"
            ></textarea>
            <button className="btn btn-accent capitalize max-w-md mt-6">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
