import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const PlanleggerSteg1 = ({ page, setPage, formData, setFormData }) => {
  const [showText, setShowText] = useState(
    "For å gjøre gode forundersøkelser ber vi deg fylle ut dette skjema."
  );

  const handelFormChange = (event, index) => {
    let data = [...formData];
    data[index][event.target.name] = event.target.value;
    setFormData(data);
  };

  const addRow = (e) => {
    e.preventDefault();
    let object = {
      takflate: "",
      takutnyttelse: "",
      takareal: "",
    };

    setFormData([...formData, object]);
  };

  const removeRow = (index, e) => {
    e.preventDefault();

    if (formData.length <= 1) {
      return;
    } else {
      let data = [...formData];
      data.splice(index, 1);
      setFormData(data);
    }
  };

  // const submit = () => {
  //   console.log(formData);
  // };

  // console.log(formData);

  return (
    <>
      <div className="my-8">
        <h1 className=" leading-[32px] h-[32px] text-accent">
          Informasjon om taket ditt
        </h1>
        <p className="text-primary h-[75px]">
          <br />
          <span className="">{showText}</span>
        </p>
      </div>
      {formData.map((formData, index) => {
        return (
          <div
            key={index}
            className="flex flex-row flex-wrap justify-evenly items-center odd:bg-green-2 even:bg-green-1 pb-4"
          >
            <div className="min-w-[200px] px-1">
              <label className="label" htmlFor="takflate">
                <span className="label-text text-accent">Taktype</span>
              </label>
              <select
                name="takflate"
                id="takflate"
                value={formData.takflate}
                className="select select-sm select-primary w-full"
                onChange={(event) => handelFormChange(event, index)}
                onFocus={() => {
                  setShowText("Velg hvilken taktype du har.");
                }}
                onBlur={() => {
                  setShowText(
                    "For å gjøre gode forundersøkelser ber vi deg fylle ut dette skjema."
                  );
                }}
              >
                <option>Taksteintak</option>
                <option>Takpapp</option>
                <option>Metalltak</option>
              </select>
            </div>
            <div className="">
              <label className="label" htmlFor="takareal">
                <span className="label-text text-accent">
                  Totalt takareal (m²)
                </span>
              </label>
              <input
                className="input input-primary input-sm max-w-[200px]"
                name="takareal"
                id="takareal"
                value={formData.takareal}
                type="number"
                placeholder="meter"
                onChange={(event) => handelFormChange(event, index)}
                onFocus={() => {
                  setShowText(
                    "Legg sammen høyde og bredde på taket du ønsker solceller på."
                  );
                }}
                onBlur={() => {
                  setShowText(
                    "For å gjøre gode forundersøkelser ber vi deg fylle ut dette skjema."
                  );
                }}
              />
            </div>
            <div className="px-1">
              <label className="label" htmlFor="takutnyttelse">
                <span className="label-text text-accent">
                  Takareal med gode solforhold (m²)
                </span>
              </label>
              <input
                value={formData.takutnyttelse}
                name="takutnyttelse"
                id="takutnyttelse"
                placeholder="meter"
                type="number"
                className="input input-primary input-sm max-w-[200px]"
                onChange={(event) => handelFormChange(event, index)}
                onFocus={() => {
                  setShowText(
                    "Gjør et annslag på hvor mye sol taket får i løpet av dagen. Vi trenger bare et annslag og det gjør ikke noe om det er 100% nøyaktig."
                  );
                }}
                onBlur={() => {
                  setShowText(
                    "For å gjøre gode forundersøkelser ber vi deg fylle ut dette skjema."
                  );
                }}
              />
            </div>
            <div className=" h-[68px] leading-[68px] flex items-end px-1">
              <button
                className="btn btn-sm btn-circle"
                onClick={(e) => removeRow(index, e)}
              >
                <BsTrash />
              </button>
            </div>
          </div>
        );
      })}

      <div className="mt-8">
        <button
          className="btn btn-sm btn-ghost capitalize font-normal text-accent text-lg"
          onClick={addRow}
        >
          Legg til flere tak <BsPlus color="currentColor" fontSize={"24px"} />
        </button>
      </div>

      <div className="my-8 max-w-md mx-auto w-full leading-[48px] flex justify-center">
        <button
          className="btn btn-accent w-36 capitalize"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Neste
        </button>
        <span className="ml-4">Steg 1 av 3</span>
      </div>
    </>
  );
};

export default PlanleggerSteg1;
