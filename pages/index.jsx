import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { BsLightningCharge, BsPlay } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Home({ hero }) {
  console.log(hero.data.attributes.hero.data.attributes);
  return (
    <Layout>
      <div className="body-padding content-padding">
        <div className="p-2 bg-accent flex rounded-3xl mx-auto max-w-5xl mb-4 ">
          <Image
            alt="solar man"
            style={{ borderRadius: "18px" }}
            src={hero.data.attributes.hero.data.attributes.url}
            height={hero.data.attributes.hero.data.attributes.height}
            width={hero.data.attributes.hero.data.attributes.width}
          />
        </div>
        <div className="mx-auto max-w-4xl">
          <h2 className=" text-2xl">Fra oljeindustri til grønn solenergi</h2>
          <p>
            Solenergi er det nyeste, reneste og mye rimeligere alternativet til
            olje og naturgass. Det blir distribuert i massiv skala over hele
            verden og er den raskest voksende energikilden på verdensbasis. Vårt
            mål er å gjøre bedriftsnorge grønnere og mer bærekraftig.
          </p>
          <div className="flex justify-end mt-6 pb-6">
            <Link href="/solcelleplanlegger">
              <button className="btn btn-accent ">
                Start solcelleplanleggeren
                <BsPlay color="currentColor" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <main
        className="min-h-screen body-padding mt-12
        grid overflow-hidden grid-rows-[0.5fr 1fr 1fr]"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className=" flex flex-row flex-wrap justify-evenly mb-12">
            <div className=" max-w-md sm:max-w-[282px] p-1">
              <div className="flex items-center min-h-[98px]">
                <Image
                  alt="miljø"
                  src="/fig1.png"
                  width={"113px"}
                  height={"98px"}
                />
                <h2>Miljøvennlig.</h2>
              </div>
              <p>
                Bidra til et grønnere bedriftsnorge ved å la virksomheten
                produsere sin egen energi.
              </p>
            </div>
            <div className=" max-w-md sm:max-w-[282px] p-1">
              <div className="flex items-center min-h-[98px]">
                <Image
                  alt="sol"
                  src="/fig3.png"
                  width={"113px"}
                  height={"98px"}
                />
                <h2>La solen gjøre jobben.</h2>
              </div>
              <p>
                Våre serviceavtaler garanterer en sikker og stabil drift som gir
                maksimalt utbytte.
              </p>
            </div>

            <div className=" max-w-md sm:max-w-[282px] p-1">
              <div className="flex items-center min-h-[98px]">
                <Image
                  alt="tech"
                  src="/fig2.png"
                  width={"113px"}
                  height={"98px"}
                />
                <h2>Cutting-edge.</h2>
              </div>

              <p>
                Vi er engasjert i markedet og tilbyr alltid det nyeste og beste
                innen solcelleteknologi.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex-col flex mb-12">
          <div className="flex">
            <div>
              <h2 className="inline-flex">Spar penger, redd miljøet</h2>
              <p>
                Med det nyeste, mest moderne innen solcelleteknologi vil
                virksomheten ha praktisk talt ingen nedetid og ingen
                forurensning. Alt bedriften trenger, fra det minste
                hjemmekontoret til det største hovedkontor, kan drives på en
                miljøvennlig måte ved å bruke det siste og beste innen
                høyeffektive solcellepaneler. Utnytt potensialet i alle hjem,
                kontorer, varehus og fabrikker. Jo mer man investerer, jo mer
                får man igjen. Og når man produserer mer energi enn man kan
                bruke, kan dette selges til nettleverandøren på strømnettet, og
                bidra til faktiske inntekter.
              </p>
            </div>
          </div>
          <h2 className="mt-4 inline-flex">
            165 øre snittpris strøm på Østlandet siste 12 måneder.
          </h2>
          <h2 className="inline-flex">90% Mulig reduksjon i strømutgifter.</h2>
        </div>
        <div>
          <div className="mx-auto max-w-4xl mb-12">
            <h2 className="inline-flex">Vær med på å ta ledelsen</h2>
            <p>
              Fornybar energi er på vei opp, så ikke vent til strømprisen går
              ned. Den beste timingen for å ta kontroll i din bedrift er nå.
              Sammen med Prosolar kan du nå dine klimaforpliktelser.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-baseline">
                <span className=" text-accent">
                  <BsLightningCharge className="mr-2" color="currentColor" />
                </span>
                <span className="flex mt-2 text-lg items-baseline">
                  Undersøkelser viser at andelen som velger grønne, bærekraftige
                  bedrifter stadig øker.
                </span>
              </div>
              <div className="inline-flex items-baseline">
                <span className=" text-accent">
                  <BsLightningCharge className="mr-2" color="currentColor" />
                </span>
                <span className="flex mt-2 text-lg items-baseline">
                  Solceller er den enkleste og mest økonomiske inngangsbilletten
                  til å bli med i det grønne skiftet.
                </span>
              </div>
              <div className="inline-flex items-baseline">
                <span className=" text-accent">
                  <BsLightningCharge className="mr-2" color="currentColor" />
                </span>
                <span className="flex mt-2 text-lg items-baseline">
                  De fleste bygg har flater med god tilgang på sollys som ikke
                  blir utnyttet på noen annen måte.
                </span>
              </div>
              <div className="inline-flex items-baseline">
                <span className=" text-accent">
                  <BsLightningCharge className="mr-2" color="currentColor" />
                </span>
                <span className="flex mt-2 text-lg items-baseline">
                  Solcellepaneler krever svært lite vedlikehold, og med
                  serviceavtale fra oss minker behovet for vedlikehold
                  ytterligere.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactForm />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/hero?populate=*`
  );
  const hero = await res.json();
  return {
    props: { hero },
  };
}
