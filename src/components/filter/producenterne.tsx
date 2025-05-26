import type React from "react";
import { useState } from "react";

type Producent = {
  id: number;
  titel: string;
  image: string;
  subtitle: string;
  city: string;
  country: string;
  text: string;
  link: string;
  type: string;
};

// Data
const producenterData: Producent[] = [
  {
    id: 1,
    titel: "Birthesminde",
    image: "/producenterne/cards/1.webp",
    subtitle: "Vipperød, Danmark",
    city: "Vipperød",
    country: "Danmark",
    text: "Økologisk svinekød fra naturligt fodrede grise. Opvokset langsomt under åben himmel på mark og skov - altid sammen med deres familie.",
    link: "https://www.birthesminde.dk/",
    type: "Kød",
  },
  {
    id: 2,
    titel: "Klippingegård",
    image: "/producenterne/cards/2.webp",
    subtitle: "Stevns, Danmark",
    city: "Stevns",
    country: "Danmark",
    text: "Fjerde generations gård på Stevns som producerer et bredt udvalg af grøntsager efter sæson. Besøg dem til jordbærpluk!",
    link: "https://www.klippingegaard.dk/",
    type: "Grøntsager",
  },
  {
    id: 3,
    titel: "Brinkholm",
    image: "/producenterne/cards/3.webp",
    subtitle: "Karise, Danmark",
    city: "Karise",
    country: "Danmark",
    text: "Småskala landbrug som dyrker grøntsager, brygger øl, og møller korn fra egen mark. Altid med den største respekt for naturen.",
    link: "http://www.landbrugslauget.dk/",
    type: "Korn",
  },
  {
    id: 4,
    titel: "HindsholmGrisen",
    image: "/producenterne/cards/4.webp",
    subtitle: "Hindsholm, Danmark",
    city: "Hindsholm",
    country: "Danmark",
    text: "Øko svinekød, slagtet på stedet. Grisene lever udendørs året rundt på mindst 100 m2 hver, opvokset langsomt og efter deres natur.",
    link: "https://www.hindsholmgrisen.dk/",
    type: "Kød",
  },
  {
    id: 5,
    titel: "Tir Bakery",
    image: "/producenterne/cards/5.webp",
    subtitle: "Sjællands Odde, Danmark",
    city: "Sjællands Odde",
    country: "Danmark",
    text: "Et bageri dedikeret til at bage med biodynamiske, økologiske og friskstenmalede kornsorter",
    link: "https://www.instagram.com/aurensdeli",
    type: "Bageri",
  },
  {
    id: 6,
    titel: "Søtoftes Have",
    image: "/producenterne/cards/6.webp",
    subtitle: "Ringsted, Danmark",
    city: "Ringsted",
    country: "Danmark",
    text: "Lille gård som dyrker sæsonens bedste økologiske grøntsager efter regenerative principper. Markene er nabo til dejlige Søtofte Mejeri.",
    link: "https://www.instagram.com/p/Bx-HUJnBJtY/",
    type: "Grøntsager",
  },
  {
    id: 7,
    titel: "Kysøko",
    image: "/producenterne/cards/7.webp",
    subtitle: "Næstved, Danmark",
    city: "Næstved",
    country: "Danmark",
    text: "Æbler, bær, honning og saft fra den 100% pesticider-fri økologiske frugtplantage, hvor bla. fugle og edderkopper agerer pestkontrol.",
    link: "https://www.kysoko.dk/kysoko/index.php",
    type: "Æbler",
  },
  {
    id: 8,
    titel: "Bygaard",
    image: "/producenterne/cards/8.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Lokaldyrkede økologiske svampe i adskillige forskellige sorter og mikrogrønt, dyrket i containere som del i bylandbruget Øens Have.",
    link: "https://www.bygaard.dk/",
    type: "Svampe",
  },
  {
    id: 9,
    titel: "Øens Have",
    image: "/producenterne/cards/9.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Bylandbrug som dyrker grøntsager, urter, svampe, bær og blomster samtidigt med de holder kurser, workshops, foredrag mm. i sæsonen.",
    link: "https://www.oenshave.dk/",
    type: "Grøntsager",
  },
{
    id: 10,
    titel: "Bybi",
    image: "/producenterne/cards/10.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Socialøkonomisk honningproduktion som kultiverer et regenerativt system, hvor bier, blomster og mennesker trives.",
    link: "https://bybi.dk/",
    type: "Honning",
  },
{
    id: 11,
    titel: "Mosegaarden Jordbrug",
    image: "/producenterne/cards/11.webp",
    subtitle: "Regstrup, Danmark",
    city: "Regstrup",
    country: "Danmark",
    text: "Et fællesskabsbaseret jordbrug med en drøm om at producere sunde økologiske fødevarer på en bæredygtig og forsvarlig måde.",
    link: "http://mosegaardenjordbrug.dk/",
    type: "Grøntsager",
  },
{
    id: 12,
    titel: "Hyldemarken",
    image: "/producenterne/cards/12.webp",
    subtitle: "Slagelse, Danmark",
    city: "Slagelse",
    country: "Danmark",
    text: "Grøntsager, frugt, æg, ænder, høns, og især kartofler! Alt produceres efter biodynamiske og permakultur principper. Respekt for dyr og miljø.minifarm hvor gederne rykkes på nyt græs hver morgen.",
    link: "https://www.instagram.com/hyldemarken/",
    type: "Grøntsager",
  },
{
    id: 13,
    titel: "Langebjerggaard",
    image: "/producenterne/cards/13.webp",
    subtitle: "Eskebjerg, Danmark",
    city: "Eskebjerg",
    country: "Danmark",
    text: "Friskt kaninkød, lammekød, kyllinger, æg, pølser, hjemmesyltede pickles og meget mere fra den lille økologiske gård under åben himmel.",
    link: "https://www.langebjerggard.dk/",
    type: "Kød",
  },
{
    id: 14,
    titel: "Lindegaarden",
    image: "/producenterne/cards/14.webp",
    subtitle: "Lille Lynge, Danmark",
    city: "Lille Lynge",
    country: "Danmark",
    text: "Grøntsager, urter, bær og frugt med vitalitet og robusthed. Dyrket med fokus på samspil med alt det levende, og styrkning af økosystemet.",
    link: "https://www.instagram.com/lindegaarden_lillelyngby/",
    type: "Grøntsager",
  },
{
    id: 15,
    titel: "Nordhavn Eddikebryggeri",
    image: "/producenterne/cards/15.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Brygning af eddike og fermenterede produkter lavet på råvarer fra egne frugtplantager, og optimal udnyttelse af lokale restproduker.",
    link: "https://www.instagram.com/eddike_cph",
    type: "Sylt og blandet",
  },
{
    id: 16,
    titel: "Søndergård",
    image: "/producenterne/cards/16.webp",
    subtitle: "Store Heddinge, Danmark",
    city: "Store Heddinge",
    country: "Danmark",
    text: "Lille økologisk grøntsagsproduktion i et blomstrende, livligt og bæredygtigt økosystem med geder, høns, grise, ænder og bier.",
    link: "https://www.xn--sndergrd-f0a8p.com/",
    type: "Grøntsager",
  },
{
    id: 17,
    titel: "Det Vilde Spinderi",
    image: "/producenterne/cards/17.webp",
    subtitle: "Nord Vestsjælland, Danmark",
    city: "Nord Vestsjælland",
    country: "Danmark",
    text: "Et mikrouldspinderi, der spinder uld fra lokale får og naturarealer, samtidig med at det beskytter både fårene og det lokale håndværk.",
    link: "https://www.detvildespinderi.dk/",
    type: "Uld",
  },
{
    id: 18,
    titel: "Copenhagen Goat Milk",
    image: "/producenterne/cards/18.webp",
    subtitle: "Jystrup, Danmark",
    city: "Jystrup",
    country: "Danmark",
    text: "Alt der har med ged at gøre! Mælk, ost, kød, is, sæbe, skind mm. Økologisk minifarm hvor gederne rykkes på nyt græs hver morgen.",
    link: "https://www.instagram.com/copenhagengoatmilk/",
    type: "Mejeri",
  },
{
    id: 19,
    titel: "Søagergård",
    image: "/producenterne/cards/19.webp",
    subtitle: "Smørum, Danmark",
    city: "Smørum",
    country: "Danmark",
    text: "Friske æg og honning efter regenerative principper, lille gård med stort fokus på bæredygtighed og dyrevelfærd.",
    link: "http://www.soeagergaard.dk/",
    type: "Mejeri",
  },
{
    id: 20,
    titel: "Applied Poetry",
    image: "/producenterne/cards/20.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Paulina er sanker og selvudnævnt heks. Hun transformerer landskabets og sæsonens vilde planter til drikbare oplevelser.",
    link: "https://www.appliedpoetry.net/",
    type: "Vilde planter og urter",
  },
{
    id: 21,
    titel: "Table Ferments",
    image: "/producenterne/cards/21.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Vildgærede fermenterede drikkevarer, kun få flasker af gangen, brygget i hånden på lokale naturlige råvarer fra etiske, bæredygtige farmere.",
    link: "https://tableferments.com/",
    type: "Sylt og blandet",
  },
{
    id: 22,
    titel: "Bruuns Baghaver",
    image: "/producenterne/cards/22.webp",
    subtitle: "Hjortekær, Danmark",
    city: "Hjortekær",
    country: "Danmark",
    text: "Hjemmelavet syltetøj fra sæsonens frugt og bær, plukket i forskellige baghaver. Lavet med økologisk vanilje bragt med hjem fra en tur til Bali.",
    link: "https://bruunsbaghave.dk/",
    type: "Sylt og blandet",
  },
{
    id: 23,
    titel: "Søtoftes Gårdmejeri",
    image: "/producenterne/cards/23.webp",
    subtitle: "Ringsted, Danmark",
    city: "Ringsted",
    country: "Danmark",
    text: "Mejeriprodukter fra Michel og Marie. Hollistisk afgræsning og 100% græsfodret kvæg med horn, malket på marken én gang om dagen.",
    link: "https://www.soetoftesgaardmejeri.dk/",
    type: "Mejeri",
  },
{
    id: 24,
    titel: "Stråhatten Markedshave",
    image: "/producenterne/cards/24.webp",
    subtitle: "Klippinge, Danmark",
    city: "Klippinge",
    country: "Danmark",
    text: "En gård, hvor en mangfoldig blanding af grøntsager, frugter, bær og blomster dyrkes med henblik på lokal distribution.",
    link: "https://filosoffenshave.dk/",
    type: "Grøntsager",
  },
{
    id: 25,
    titel: "Slowburn Brewing Co-op",
    image: "/producenterne/cards/25.webp",
    subtitle: "Hvidovre, Danmark",
    city: "Hvidovre",
    country: "Danmark",
    text: "Et selvstændigt arbejder-ejet mikrobryggeri som producerer en bred vifte af øl, med et fokus på høj kvalitet og drikbarhed.",
    link: "https://slowburn.coop/",
    type: "Drikkevare",
  },
{
    id: 26,
    titel: "Österlensaffran AB",
    image: "/producenterne/cards/26.webp",
    subtitle: "Skåne, Sverige",
    city: "Skåne",
    country: "Sverige",
    text: "Kalle og Johannes producerer en ekstra fin svensk øko safran. Lokalt dyrket, håndplukket og forsigtigt tørret i Skåne.",
    link: "https://www.instagram.com/osterlensaffran/?hl=en",
    type: "Vilde planter og urter",
  },
{
    id: 27,
    titel: "Lille bakery",
    image: "/producenterne/cards/27.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Bageri og spisested der arbejder tæt med lokale dyrkere for at lave naturlig, bæredygtig, sund og frisk mad og brød til alle - til en fair pris.",
    link: "https://www.lillegrocery.com/",
    type: "Bageri",
  },
{
    id: 28,
    titel: "Folkets Pops",
    image: "/producenterne/cards/28.webp",
    subtitle: "Malmø, Sverige",
    city: "Malmø",
    country: "Sverige",
    text: "Naturligt veganske sorbetis lavet af sæsonens frugter, som ellers ville gå til spilde, vilde indsamlede smagsgivere, råvarer fra lokale venlige landmænd og økologiske ingredienser.",
    link: "https://www.avijll.dk/",
    type: "Is",
  },
{
    id: 29,
    titel: "Sigtemøllevejen",
    image: "/producenterne/cards/29.webp",
    subtitle: "Bornholm, Danmark",
    city: "Bornholm",
    country: "Danmark",
    text: "Familiedrevet økologisk frugtplantage og vingård som brygger vin, cider og øl med minimal indgreb, altsammen fermenteret med vild gær fra naturen.",
    link: "https://www.instagram.com/sigtemoellevejenciderogvin/",
    type: "Drikkevare",
  },
{
    id: 30,
    titel: "Nagelsbjergvin",
    image: "/producenterne/cards/30.webp",
    subtitle: "Ringsted, Danmark",
    city: "Ringsted",
    country: "Danmark",
    text: "Lille producent af ren, tør og syredreven æblecider, med det mål at udtrykke det smukke ved fermenteret æblesaft fra Danmark.",
    link: "https://www.instagram.com/nagelsbjergvin/",
    type: "Drikkevare",
  },
{
    id: 31,
    titel: "Sønderstrand",
    image: "/producenterne/cards/31.webp",
    subtitle: "Kalundborg, Danmark",
    city: "Kalundborg",
    country: "Danmark",
    text: "Familiedreven vin- og blomstergård med fokus på lokaltdyrkede farverige buketter og vine, som eller ofte importeres langvejs fra. ",
    link: "https://www.instagram.com/soenderstrandvin/",
    type: "Drikkevare",
  },
{
    id: 32,
    titel: "Garbolund",
    image: "/producenterne/cards/32.webp",
    subtitle: "Helsinge, Danmark",
    city: "Helsinge",
    country: "Danmark",
    text: "Lille naturvinsproducent hvor alt markarbejde er udført i hånden med principper om respekt og forsigtighed for naturen.",
    link: "https://www.instagram.com/garbolundnaturvin/",
    type: "Drikkevare",
  },
{
    id: 33,
    titel: "Klarskov Frugt",
    image: "/producenterne/cards/33.webp",
    subtitle: "Korsør, Danmark",
    city: "Korsør",
    country: "Danmark",
    text: "Lille frugtplantage med 4100 æble- og pæretræer, kultiveret efter biodynamiske principper uden sprays, kunstig gødning eller vanding.",
    link: "https://www.klarskovfrugt.dk/",
    type: "Æbler",
  },
{
    id: 34,
    titel: "Æbibo",
    image: "/producenterne/cards/34.webp",
    subtitle: "Stenlille, Danmark",
    city: "Stenlille",
    country: "Danmark",
    text: "Lille gård hvor Alice og Niels dyrker økologisk frugt og laver honning, som du primært sælger ansigt til ansigt på torvemarkeder.",
    link: "https://aebibo.dk/",
    type: "Æbler",
  },
{
    id: 35,
    titel: "Planteskolen Evigt Liv",
    image: "/producenterne/cards/35.webp",
    subtitle: "Jystrup, Danmark",
    city: "Jystrup",
    country: "Danmark",
    text: "100% vegansk planteskole baseret på permakultur principper, specialiseret i flerårige, spiselige planter. Økokompost-baseret, uden spaghnum.",
    link: "https://evigt-liv.dk/",
    type: "Vilde planter og urter",
  },
{
    id: 36,
    titel: "Naturlig Blomst",
    image: "/producenterne/cards/36.webp",
    subtitle: "Præstø, Danmark",
    city: "Præstø",
    country: "Danmark",
    text: "Økologiske blomsterbuketter fra sæsonen. Blosmterne er dyrket med fokus på bæredygtighed og respekt for naturen. ",
    link: "https://www.langebjerggard.dk/",
    type: "Vilde planter og urter",
  },
{
    id: 37,
    titel: "Ærtebjerg Jordbrug",
    image: "/producenterne/cards/37.webp",
    subtitle: "Grevinge, Danmark",
    city: "Grevinge",
    country: "Danmark",
    text: "Småskala markedshave ved Lammefjorden. Dyrkning af mange slags grøntsager efter økologiske og regenerative principper. ",
    link: "https://www.aertebjerg-jordbrug.dk/",
    type: "Grøntsager",
  },
{
    id: 38,
    titel: "Dansk Camelina",
    image: "/producenterne/cards/38.webp",
    subtitle: "Vestsjælland, Danmark",
    city: "Vestsjælland",
    country: "Danmark",
    text: "En lille dansk økologisk produktion af camelinafrø og camelinaolie – et sundt og lokalt alternativ til andre planteolier.",
    link: "https://www.instagram.com/danskcamelina/",
    type: "Olier",
  },
{
    id: 39,
    titel: "Twisted Herbal",
    image: "/producenterne/cards/39.webp",
    subtitle: "Skævinge, Danmark",
    city: "Skævinge",
    country: "Danmark",
    text: "Milena er økologisk dyrker af medicinske og kulinariske urter, fremstiller urtemedicin, permakultur-vildhavemand og har en ph.d. i plantevidenskab.",
    link: "https://www.instagram.com/twistedherbal",
    type: "Vilde planter og urter",
  },
{
    id: 40,
    titel: "CPH Seasonal Foods",
    image: "/producenterne/cards/40.webp",
    subtitle: "Amager, Danmark",
    city: "Amager",
    country: "Danmark",
    text: "Pickles, syltevarer, marmelader, chutneys og meget mere – alt sammen lavet med sæsonens og egnens råvarer.",
    link: "https://cvrapi.dk/virksomhed/dk/copenhagen-seasonal-foods/43979787",
    type: "Sylt og blandet",
  },
{
    id: 41,
    titel: "Orupdal Jordbrug",
    image: "/producenterne/cards/41.webp",
    subtitle: "Lejre, Danmark",
    city: "Lejre",
    country: "Danmark",
    text: "Et regenerativt landbrug drevet af tre unge kvinder, der dyrker grøntsager og krydderurter fra økologiske eller biodynamiske frø.",
    link: "https://www.instagram.com/orupdal_jordbrug/",
    type: "Grøntsager",
  },
{
    id: 42,
    titel: "Meta Fermentary",
    image: "/producenterne/cards/42.webp",
    subtitle: "København, Danmark",
    city: "København",
    country: "Danmark",
    text: "Lokalt fermenterings værksted, der fremstiller et udvalg af unikke, upasteuriserede fermenterede krydderier. Specialiseret i traditionelle, gamle teknikker og nyskabende innovation.",
    link: "https://www.instagram.com/cphseasonalfoods/",
    type: "Sylt og blandet",
  },
];

// Card component
const ProducentCard: React.FC<{ producent: Producent }> = ({ producent }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-3/10 p-4 mb-10">
      <article className="  overflow-hidden h-full flex flex-col">
        <img
          src={producent.image || "/placeholder.svg"}
          alt={producent.titel}
          className="w-full aspect-5/4 object-cover rounded-[20px]"
        />
        <div className="flex-grow">
          <h3 className="text-MarketMidnight-500 mb-1">{producent.titel}</h3>
          <p className="text-MarketMidnight-500 mb-3">{producent.subtitle}</p>
          <p className="text-MarketMidnight-500 mb-4">{producent.text}</p>
          <a
            href={producent.link}
            target="_blank"
            className="inline-block mt-auto text-MarketMidnight-500 font-bold border-b border-MarketMidnight-500 hover:opacity-70"
          >
            Læs mere
          </a>
        </div>
      </article>
    </div>
  );
};

// Filtrering
const Producenter: React.FC<{ producenter?: Producent[] }> = ({
  producenter = producenterData,
}) => {
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Får unike lande, byer og typer fra daten
  const countries = Array.from(new Set(producenter.map((producent) => producent.country)));
  const cities = Array.from(new Set(producenter.map((producent) => producent.city)));
  const types = Array.from(new Set(producenter.map((producent) => producent.type)));

  // Filtrer producenterne baseret på filtrering
  const filteredProducenter = producenter.filter((producent) => {
    const matchesCountry = countryFilter === "all" || producent.country === countryFilter;
    const matchesCity = cityFilter === "all" || producent.city === cityFilter;
    const matchesType = typeFilter === "all" || producent.type === typeFilter;

    return matchesCountry && matchesCity && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="mb-6">Se producenterne hos Grønt Marked</h3>
      <div className="rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-5">
              I hvilket land vil du besøge producenter?
            </label>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-black rounded-full"
            >
              <option value="all">Vælg land</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-5">
              Hvilken by er du interesseret i?
            </label>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-black rounded-full"
            >
              <option value="all">Vælg by</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-5">
              Hvilken type produkter eller mad vil du se?
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-4 py-3 bg-transparent border border-black rounded-full"
            >
              <option value="all">Vælg type</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}

      <div className="flex flex-wrap -mx-4 justify-between">
        {filteredProducenter.map((producent) => (
          <ProducentCard key={producent.id} producent={producent} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProducenter.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Ingen producenter fundet med de valgte filtre.</p>
        </div>
      )}
    </div>
  );
};

export default Producenter;
