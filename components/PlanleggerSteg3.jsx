import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const PlanleggerSteg3 = ({ page, setPage }) => {
  const router = useRouter();
  const redirectHome = () => {
    router.push("/");
  };
  const { register } = useForm();

  return (
    <div className="body-padding min-h-[574px]">
      <div className="text-primary mt-8 mb-1 text-center">
        <h2 className=" text-2xl">Kontaktinnformasjon</h2>
      </div>
      <div className="max-w-sm m-auto min-h-[323px]">
        <label className="label" htmlFor="navn">
          <span className="label-text text-accent text-md">Navn</span>
        </label>
        <input
          {...register("navn")}
          placeholder="Fult navn"
          type="text"
          id="navn"
          name="navn"
          className="input bg-neutral w-full max-w-sm"
        />
        <label className="label" htmlFor="firmanavn">
          <span className="label-text text-accent text-md">Firma navn</span>
        </label>
        <input
          {...register("firmanavn")}
          placeholder="Firmanavn"
          type="text"
          id="firmanavn"
          className="input bg-neutral w-full max-w-sm"
        />
        <label className="label" htmlFor="e-post">
          <span className="label-text text-accent text-md">E-post</span>
        </label>
        <input
          {...register("epost")}
          placeholder="E-post"
          type="email"
          id="epost"
          name="epost"
          className="input bg-neutral w-full max-w-sm"
        />
        <label className="label" htmlFor="telefon">
          <span className="label-text text-accent text-md">Telefonnummer</span>
        </label>

        <input
          {...register("telefon")}
          placeholder="Telefonnummer"
          type="text"
          id="telefon"
          name="telefon"
          className="input bg-neutral w-full max-w-sm"
        />
        <label className="label" htmlFor="addresse">
          <span className="label-text text-accent text-md">Gateadresse</span>
        </label>
        <input
          {...register("adresse")}
          placeholder="Adresse"
          type="text"
          id="adresse"
          name="adresse"
          className="input bg-neutral w-full max-w-sm"
        />
        <div className="flex">
          <div>
            <label className="label" htmlFor="postnummer">
              <span className="label-text text-accent text-md">Postnummer</span>
            </label>
            <input
              {...register("postnummer")}
              placeholder="Postnummer"
              type="text"
              id="postnummer"
              name="postnummer"
              className="input bg-neutral w-full "
            />
          </div>
          <div className="ml-4">
            <label className="label" htmlFor="poststed">
              <span className="label-text text-accent text-md">Poststed</span>
            </label>
            <input
              {...register("kontaktinfo.poststed")}
              placeholder="Poststed"
              type="text"
              id="poststed"
              name="poststed"
              className="input bg-neutral w-full "
            />
          </div>
        </div>
      </div>
      <div className="my-8 w-full flex items-center justify-center md:relative md:right-12">
        <h2 className="mr-4 text-base">Steg 2 av 3</h2>
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
            redirectHome();
          }}
        >
          Neste
        </button>
      </div>
    </div>
  );
};

export default PlanleggerSteg3;
