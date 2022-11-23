import { useFieldArray } from "react-hook-form";
import { useState } from "react";

const PlanleggerStart = ({
  page,
  setPage,
  control,
  register,
  handleSubmit,
}) => {
  const [onFocusText, setOnFocusText] = useState({
    h2: "Velkommen til solcelleplaleggeren",
    p: "For å gjøre gode forundersøkelser ber vi deg fylle ut dette skjema.",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setPage(page + 1);
      })}
    >
      <div className="text-primary h-[75px] my-8">
        <h2 className=" text-2xl">{onFocusText.h2}</h2>
        <p>{onFocusText.p}</p>
      </div>
      {fields.map(
        (
          { id, takvinkel, taktype, takareal, takutnyttelse, strømnett },
          index
        ) => {
          return (
            <div
              key={id}
              className="flex flex-wrap justify-center items-end odd:bg-green-2 even:bg-green-1 p-4"
            >
              <div>
                <label className="label">
                  <span className="label-text text-accent">Takvinkel</span>
                </label>
                <select
                  onFocus={() => {
                    setOnFocusText({
                      h2: "Takvinkel",
                      p: "Velg om taket er flatt eller om det er skrått.",
                    });
                  }}
                  required
                  {...register(`items[${index}].takvinkel`)}
                  name={`items[${index}].takvinkel`}
                  defaultValue={takvinkel}
                  className="select select-primary w-36 m-1"
                  id="takvinkel"
                >
                  <option value={""}>Velg</option>
                  <option value={"Vinklet tak"}>Vinklet tak</option>
                  <option value={"Flatt tak"}>Flatt tak</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-accent">Taktype</span>
                </label>
                <select
                  onFocus={() => {
                    setOnFocusText({
                      h2: "Tak type",
                      p: "Her velger du hvilket type tak du har. Taktypene gir forskjellige forutsetninger for installatøren.",
                    });
                  }}
                  required
                  {...register(`items[${index}].taktype`)}
                  name={`items[${index}].taktype`}
                  defaultValue={taktype}
                  className="select select-primary w-36 m-1"
                  id="taktype"
                >
                  <option value={""}>Velg</option>
                  <option value={"Takstein"}>Takstein</option>
                  <option value={"Metalltak"}>Metalltak</option>
                  <option value={"Takpapp"}>Takpapp</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-accent">
                    Totalt takareal
                  </span>
                </label>
                <input
                  onFocus={() => {
                    setOnFocusText({
                      h2: "Totalt takareal",
                      p: "Mål hele takflaten. Skriv som kvadratmeter.",
                    });
                  }}
                  required
                  {...register(`items[${index}].takareal`)}
                  name={`items[${index}].takareal`}
                  defaultValue={takareal}
                  className="input input-primary w-24 m-1"
                  id="takareal"
                  type="number"
                  pattern="[0-9]"
                  placeholder="m²"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-accent">Tak utnyttelse</span>
                </label>
                <input
                  onFocus={() => {
                    setOnFocusText({
                      h2: "Tak utnyttelse",
                      p: "Gi oss din vurdering av hvor mye sollys taket ditt får i løpet av dagen. Skrives som prosent",
                    });
                  }}
                  required
                  {...register(`items[${index}].takutnyttelse`)}
                  name={`items[${index}].takutnyttelse`}
                  defaultValue={takutnyttelse}
                  className="input input-primary w-24 m-1"
                  id="takutnyttelse"
                  type="number"
                  pattern="[0-9]"
                  placeholder="%"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-accent">Strømnett</span>
                </label>
                <select
                  onFocus={() => {
                    setOnFocusText({
                      h2: "Strømnett",
                      p: "Hvis ikke du vet hvilket størmnett du har finner vi det ut for deg.",
                    });
                  }}
                  required
                  {...register(`items[${index}].strømnett`)}
                  name={`items[${index}].strømnett`}
                  defaultValue={strømnett}
                  className="select select-primary w-36 m-1"
                  id="strømnett"
                >
                  <option value={""}>Velg</option>
                  <option value={"230v"}>230v</option>
                  <option value={"400v"}>400v</option>
                </select>
              </div>

              {!index ? (
                <button
                  disabled
                  className="btn btn-circle ml-4 m-1 opacity-0 capitalize"
                >
                  slett
                </button>
              ) : (
                <button
                  className="btn btn-circle ml-4 m-1 capitalize"
                  type="button"
                  onClick={() => remove(index)}
                >
                  slett
                </button>
              )}
            </div>
          );
        }
      )}
      <button
        className="btn btn-ghost capitalize mt-2"
        type="button"
        onClick={() => append({})}
      >
        + Legg til nytt tak
      </button>
      <div className="my-8 flex justify-center mx-auto w-full items-center">
        <button className="btn btn-accent w-36 capitalize" type="submit">
          Neste
        </button>
        <h2 className="ml-4 text-base">Steg 1 av 3</h2>
      </div>
    </form>
  );
};

export default PlanleggerStart;
