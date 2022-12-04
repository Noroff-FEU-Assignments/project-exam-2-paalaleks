import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import Airtable from "airtable";

const ContactForm = () => {
  const schema = yup.object().shape({
    navn: yup
      .string()
      .min(2, "Du må minimum ha et navn på 2 bokstaver.")
      .required("Vi trenger navn!"),
    epost: yup
      .string()
      .required("Vi trenger en e-post!")
      .email("Vennligst skriv inn en ordentlig epostadresse."),
    emne: yup
      .string()
      .min(2, "Vennligst skriv inn en setning eller to.")
      .required("Vennligst skriv inn en setning eller to."),
    melding: yup
      .string()
      .min(5, "Vennligst skriv inn en setning eller to.")
      .required("Vennligst skriv inn en setning eller to."),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    shouldUseNativeValidation: true,
  });

  const onSubmit = (data, e) => {
    console.log(data);
    var base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
    }).base("appQLcb6EZ1c2LKFt");

    base("kontaktskjema").create([{ fields: data }], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  };

  return (
    <section
      className="body-padding bg-[url('/solar-pattern-dark.png')] bg-[length:30px_30px] bg-bottom"
      id="kontaktskjema"
    >
      <div className="max-w-4xl mx-auto w-full py-16">
        <h3 className="text-accent max-w-max">
          Vi realiserer klimamålene dine i dag
        </h3>
        <p className="text-primary mb-8 max-w-max">
          Ta kontakt med oss for næremere informasjon om de tjenestene vi{" "}
          <Link href="/solcelleplanlegger">
            <a className="link">solcelleplanleggeren</a>
          </Link>{" "}
          slik at vi får den informasjonen vi trenger for å gi deg en pris og
          komme i gang med jobben.
        </p>
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col form-control max-w-md w-full">
            <label className="label" htmlFor="navn">
              <span className="label-text text-accent">navn</span>
            </label>
            <input
              {...register("navn")}
              type="text"
              id="navn"
              name="navn"
              placeholder="Type here"
              className="input w-full max-w-md input-md bg-neutral"
            />

            <label className="label" htmlFor="epost">
              <span className="label-text text-accent">epost</span>
            </label>
            <input
              {...register("epost")}
              type="epost"
              id="epost"
              name="epost"
              placeholder="Type here"
              className="input w-full max-w-md input-md bg-neutral"
            />

            <label className="label" htmlFor="emne">
              <span className="label-text text-accent">emne</span>
            </label>
            <input
              {...register("emne")}
              type="text"
              id="emne"
              name="emne"
              placeholder="Type here"
              className="input w-full max-w-md input-md bg-neutral"
            />

            <label className="label" htmlFor="melding">
              <span className="label-text text-accent">melding</span>
            </label>
            <textarea
              {...register("melding")}
              id="melding"
              name="melding"
              className="textarea min-h-[250px] max-w-md  bg-neutral"
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
