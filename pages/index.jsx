import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { BsLightningCharge } from "react-icons/bs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main
        className="min-h-screen body-padding pt-12
        grid overflow-hidden grid-rows-[0.5fr 1fr 1fr]"
      >
        <section className=" flex flex-row max-w-4xl mx-auto pb-8">
          <div className="mr-4">
            <h2>Miljøvennlig.</h2>
            <p>
              Bidra til et grønnere bedriftsnorge ved å la virksomheten
              produsere sin egen energi.
            </p>
          </div>
          <div className="mr-4">
            <h2>La solen gjøre jobben.</h2>
            <p>
              Våre serviceavtaler garanterer en sikker og stabil drift som gir
              maksimalt utbytte.
            </p>
          </div>

          <div className="mr-4">
            <h2>Cutting-edge.</h2>
            <p>
              Vi er engasjert i markedet og tilbyr alltid det nyeste og beste
              innen solcelleteknologi.
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto flex-col flex pb-8">
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
        </section>
        <section>
          <div className="mx-auto max-w-4xl pb-8">
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
        </section>
      </main>
      <ContactForm />
    </Layout>
  );
}
