import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Du må minimum ha et navn på 2 bokstaver.")
      .required("Vi trenger navn!"),
    email: yup
      .string()
      .required("Vi trenger en e-post!")
      .email("Vennligst skriv inn en ordentlig epostadresse."),
    subject: yup
      .string()
      .min(2, "Vennligst skriv inn en setning eller to.")
      .required("Vennligst skriv inn en setning eller to."),
    message: yup
      .string()
      .min(5, "Vennligst skriv inn en setning eller to.")
      .required("Vennligst skriv inn en setning eller to."),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    shouldUseNativeValidation: true,
  });

  const onError = (data, e) => console.log(data, e);
  const onSubmit = (data, e) => console.log(data, e);

  return (
    <section className="body-padding bg-[#1b444d]">
      <div className="max-w-4xl mx-auto w-full py-16">
        <h3 className="text-accent max-w-max">
          Vi realiserer klimamålene dine i dag
        </h3>
        <p className="text-primary mb-8 max-w-max">
          Ta kontakt med oss for næremere informasjon om de tjenestene vi
          <Link href="/solcelleplanlegger">
            <a className="link">solcelleplanleggeren</a>
          </Link>
          slik at vi får den informasjonen vi trenger for å gi deg en pris og
          komme i gang med jobben.
        </p>
        <form className="flex" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="flex flex-col form-control max-w-md w-full">
            <label className="label" htmlFor="name">
              <span className="label-text text-accent">Name</span>
            </label>
            <input
              {...register("name")}
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
              {...register("email")}
              type="email"
              id="email"
              name="email"
              placeholder="Type here"
              className="input w-full max-w-md input-primary"
            />

            <label className="label" htmlFor="subject">
              <span className="label-text text-accent">Subject</span>
            </label>
            <input
              {...register("subject")}
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
              {...register("message")}
              id="message"
              name="message"
              className="textarea min-h-[250px] max-w-md textarea-primary"
              placeholder="Type here"
            ></textarea>

            <button
              type="submit"
              className="btn btn-accent capitalize max-w-md mt-6"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
