import { useRouter } from "next/router";

const PlanleggerSteg3 = ({ page, setPage, formData, setFormData }) => {
  const router = useRouter();
  const redirectHome = () => {
    router.push("/");
  };

  const submit = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="mx-auto my-8">
        <label className="label" htmlFor="navn">
          <span className="label-text text-accent text-md">Navn</span>
        </label>
        <input
          placeholder="Fult navn"
          type="text"
          id="navn"
          name="navn"
          className="input input-primary w-full max-w-md"
        />
        <label className="label" htmlFor="e-post">
          <span className="label-text text-accent text-md">E-post</span>
        </label>
        <input
          placeholder="E-post"
          type="email"
          id="e-post"
          name="e-post"
          className="input input-primary w-full max-w-md"
        />
        <label className="label" htmlFor="phone">
          <span className="label-text text-accent text-md">Telefonnummer</span>
        </label>
        <input
          placeholder="Telefonnummer"
          type="text"
          id="phone"
          name="phone"
          className="input input-primary w-full max-w-md"
        />
        <label className="label" htmlFor="address">
          <span className="label-text text-accent text-md">Gateadresse</span>
        </label>
        <input
          placeholder="Adresse"
          type="text"
          id="address"
          name="address"
          className="input input-primary w-full max-w-md"
        />
        <div className="flex">
          <div>
            <label className="label" htmlFor="zip">
              <span className="label-text text-accent text-md">Postnummer</span>
            </label>
            <input
              placeholder="Postnummer"
              type="text"
              id="zip"
              name="zip"
              className="input input-primary w-full max-w-sm"
            />
          </div>
          <div className="ml-4">
            <label className="label" htmlFor="city">
              <span className="label-text text-accent text-md">Poststed</span>
            </label>
            <input
              placeholder="Poststed"
              type="text"
              id="city"
              name="city"
              className="input input-primary w-full max-w-sm"
            />
          </div>
        </div>
      </div>

      <div className="my-8 mx-auto w-full flex justify-center leading-[48px]">
        <button
          className="btn btn-accent w-36 capitalize mr-1"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Forige
        </button>
        <button
          type="submit"
          className="btn btn-accent w-36 capitalize ml-1"
          onClick={() => {
            submit(), redirectHome();
          }}
        >
          Ferdig
        </button>
        <span className="ml-4">Kontaktinformasjon – Steg 3 av 3</span>
      </div>
    </>
  );
};

export default PlanleggerSteg3;
