const Hero = () => {
  return (
    <>
      <div className="body-padding">
        <div
          className="bg-[url('/solar-guy.png')] h-[400px] max-w-[1100px] bg-cover w-full mx-auto 
      rounded-3xl  outline outline-accent outline-8 mb-8 mt-2 "
        />
      </div>

      <div className="body-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className=" text-2xl">Fra oljeindustri til grønn solenergi</h2>
          <p>
            Solenergi er det nyeste, reneste og mye rimeligere alternativet til
            olje og naturgass. Det blir distribuert i massiv skala over hele
            verden og er den raskest voksende energikilden på verdensbasis. Vårt
            mål er å gjøre bedriftsnorge grønnere og mer bærekraftig.
          </p>
          <div className="flex justify-end mt-6 pb-6">
            <button className="btn btn-accent capitalize">
              <span className="mr-2">Start solcelleplanleggeren</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.315"
                height="16.201"
                viewBox="0 0 23.315 27.201"
                className="fill-current"
              >
                <path
                  id="Polygon_1"
                  data-name="Polygon 1"
                  d="M13.6,0,27.2,23.315H0Z"
                  transform="translate(23.315) rotate(90)"
                  fill="#003d1b"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
