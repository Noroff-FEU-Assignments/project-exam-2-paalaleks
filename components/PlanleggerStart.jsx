import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
var Airtable = require("airtable");

const PlanleggerStart = ({ page, setPage }) => {
  const [onFocusText, setOnFocusText] = useState({
    h2: "Velkommen til solcelleplaleggeren",
    p: "For å gjøre gode forundersøkelser ber vi deg fylle ut dette skjema.",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      tak: [
        {
          takvinkel: "",
          taktype: "",
          areal: "",
          strømnett: "",
          kommentar: "",
          pris: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "tak",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="text-primary m-8">
        <h2 className=" text-2xl">{onFocusText.h2}</h2>
        <p className="">{onFocusText.p}</p>
      </div>
      <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(
          (
            { id, takvinkel, takareal, taktype, strømnett, kommentar },
            index
          ) => {
            return (
              <div
                key={id}
                className="odd:bg-green-1 even:bg-green-2 px-4 pt-12 pb-8 flex relative"
              >
                <div className="mx-auto">
                  <div className=" justify-start items-center flex flex-wrap ">
                    <div className="flex flex-col mr-2">
                      <label className=" text-accent label" htmlFor="takvinkel">
                        Takvinkel
                      </label>
                      <select
                        defaultValue={takvinkel}
                        onFocus={() => {
                          setOnFocusText({
                            h2: "Takvinkel",
                            p: "Velg om taket er flatt eller om det er skrått.",
                          });
                        }}
                        {...register(`tak[${index}].takvinkel`)}
                        className="input input-md bg-neutral w-24"
                      >
                        <option value={""}>Velg</option>
                        <option value={"Vinklet tak"}>Vinklet tak</option>
                        <option value={"Flatt tak"}>Flatt tak</option>
                      </select>
                    </div>
                    <div className="flex flex-col mr-2 ">
                      <label className=" text-accent label" htmlFor="taktype">
                        Taktype
                      </label>
                      <select
                        defaultValue={taktype}
                        onFocus={() => {
                          setOnFocusText({
                            h2: "Tak type",
                            p: "Her velger du hvilket type tak du har. Taktypene gir forskjellige forutsetninger for installatøren.",
                          });
                        }}
                        {...register(`tak[${index}].taktype`)}
                        className="input input-md bg-neutral w-24 "
                      >
                        <option value={""}>Velg</option>
                        <option value={"Takstein"}>Takstein</option>
                        <option value={"Metalltak"}>Metalltak</option>
                        <option value={"Takpapp"}>Takpapp</option>
                      </select>
                    </div>
                    <div className="flex flex-col mr-2 ">
                      <label className=" text-accent label" htmlFor="strømnett">
                        Strømnett
                      </label>
                      <select
                        defaultValue={strømnett}
                        onFocus={() => {
                          setOnFocusText({
                            h2: "Strømnett",
                            p: "Hvis ikke du vet hvilket størmnett du har finner vi det ut for deg.",
                          });
                        }}
                        {...register(`tak[${index}].strømnett`)}
                        className="input input-md bg-neutral w-24  "
                      >
                        <option value={""}>Velg</option>
                        <option value={"230v"}>230v</option>
                        <option value={"400v"}>400v</option>
                      </select>
                    </div>
                    <div className="flex flex-col mr-2 ">
                      <label className=" text-accent label" htmlFor="takareal">
                        Takareal
                      </label>
                      <input
                        defaultValue={takareal}
                        onFocus={() => {
                          setOnFocusText({
                            h2: "Totalt takareal",
                            p: "Mål hele takflaten. Skriv som kvadratmeter.",
                          });
                        }}
                        {...register(`tak[${index}].takareal`)}
                        type="text"
                        placeholder="m²"
                        className="input input-md bg-neutral w-20  "
                      />
                    </div>
                    <div className="flex flex-col mr-2 ">
                      <label className=" text-accent label" htmlFor="takareal">
                        Estimert pris
                      </label>
                      <span className="text-center h-12 leading-[48px]">
                        100
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label className=" text-accent label" htmlFor="kommentar">
                      kommentar
                    </label>
                    <textarea
                      defaultValue={kommentar}
                      onFocus={() => {
                        setOnFocusText({
                          h2: "Kommentar",
                          p: "Skirv inn tilleggsinformasjon hvis det er behov for det.",
                        });
                      }}
                      {...register(`tak[${index}].kommentar`)}
                      placeholder="kommentar her"
                      className="textarea textarea-sm bg-neutral max-w-xl  text-base "
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center h-fit absolute right-2 top-2">
                  <span className="label text-sm font-bold">
                    Tak# {index + 1}
                  </span>
                  |
                  <button
                    className="btn btn-xs btn-ghost text-error"
                    onClick={() => remove(index)}
                  >
                    slett
                  </button>
                </div>
              </div>
            );
          }
        )}
        <button
          className="btn btn-ghost capitalize m-4 align-middle w-36 self-center"
          type="button"
          onClick={() => append({})}
        >
          + Ny takflate
        </button>

        <div className="my-8 w-full flex items-center justify-center relative right-12">
          <h2 className="text-base mr-4">Steg 1 av 3</h2>

          <button
            type="submit"
            onClick={() => {
              setPage(page + 1);
            }}
            className="btn btn-accent w-36 capitalize"
          >
            Neste
          </button>
        </div>
      </form>
    </>
  );
};

export default PlanleggerStart;
