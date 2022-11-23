const PlanleggerSteg2 = ({ page, setPage }) => {
  return (
    <div>
      <p className="text-primary h-[75px] mt-8">
        <span className="">demo text</span>
      </p>
      <div className="my-8 flex justify-center mx-auto w-full leading-[48px]">
        <button
          className="btn btn-accent w-36 capitalize mr-1"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Forige
        </button>
        <button
          className="btn btn-accent w-36 capitalize ml-1"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Neste
        </button>
        <span className="ml-4">Strømnettet – Steg 3 av 3</span>
      </div>
    </div>
  );
};

export default PlanleggerSteg2;

// Vi trenger kunde info, navn, tlf, e-post og adresse. -
// Type tak, taksteinstak, takpapp, metall tak eller flatt tak. - mål på hver enkelt takflate som skal ha paneler og  bredde på hver takflate som kunden ønsker paneler på. type strøm nett. 230v it eller 400v TN. Send meg gjerne e-post adressen din så kan jeg sende deg litt info som kan hjelpe deg å finne gode løsninger.
