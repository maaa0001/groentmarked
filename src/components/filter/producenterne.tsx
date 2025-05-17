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
    titel: "Marked - Gammelholm",
    image: "src/assets/images/Producent.png",
    subtitle: "Vipperød, Danmark",
    city: "Vipperød",
    country: "Danmark",
    text: "Økologisk svinekød fra naturligt fodrede grise. Opvokset langsomt under åben himmel på mark og skov - altid sammen med deres familie.",
    link: "#",
    type: "Kød",
  },
  {
    id: 2,
    titel: "Klippingegård",
    image: "src/assets/images/Producent.png",
    subtitle: "Stevns, Danmark",
    city: "Stevns",
    country: "Danmark",
    text: "Fjerde generations gård på Stevns som producerer et bredt udvalg af grøntsager efter sæson. Besøg dem til jordbærpluk!",
    link: "#",
    type: "Grøntsager",
  },
  {
    id: 3,
    titel: "Brinkholm",
    image: "src/assets/images/Producent.png",
    subtitle: "Karise, Danmark",
    city: "Karise",
    country: "Danmark",
    text: "Småskala landbrug som dyrker grøntsager, brygger øl, og møller korn fra egen mark. Altid med den største respekt for naturen.",
    link: "#",
    type: "Korn",
  },
  {
    id: 4,
    titel: "HindsholmGrisen",
    image: "/placeholder.svg?height=200&width=300",
    subtitle: "Hindsholm, Danmark",
    city: "Hindsholm",
    country: "Danmark",
    text: "Traditionel osteproduktion med moderne twist. Håndlavede oste fra lokale køer på Bornholm.",
    link: "#",
    type: "Mejeri",
  },
  {
    id: 5,
    titel: "Skåne Frugtplantage",
    image: "/placeholder.svg?height=200&width=300",
    subtitle: "Malmö, Sverige",
    city: "Malmö",
    country: "Sverige",
    text: "Økologisk frugtplantage med æbler, pærer og bær. Besøg deres gårdbutik eller pluk selv i sæsonen.",
    link: "#",
    type: "Frugt",
  },
];

// Card component
const ProducentCard: React.FC<{ producent: Producent }> = ({ producent }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <article className=" rounded-lg overflow-hidden h-full flex flex-col">
        <img
          src={producent.image || "/placeholder.svg"}
          alt={producent.titel}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-semibold mb-1">{producent.titel}</h3>
          <p className="text-sm text-gray-600 mb-3">{producent.subtitle}</p>
          <p className="mb-4">{producent.text}</p>
          <a
            href={producent.link}
            className="inline-block mt-auto text-black border-b border-black hover:opacity-70"
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

  // Get unique countries, cities and product types from data
  const countries = Array.from(new Set(producenter.map((producent) => producent.country)));
  const cities = Array.from(new Set(producenter.map((producent) => producent.city)));
  const types = Array.from(new Set(producenter.map((producent) => producent.type)));

  // Filter producers based on selected filters
  const filteredProducenter = producenter.filter((producent) => {
    const matchesCountry = countryFilter === "all" || producent.country === countryFilter;
    const matchesCity = cityFilter === "all" || producent.city === cityFilter;
    const matchesType = typeFilter === "all" || producent.type === typeFilter;

    return matchesCountry && matchesCity && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
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
            <label className="block text-sm font-medium mb-2">
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
            <label className="block text-sm font-medium mb-2">
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

      <div className="flex flex-wrap -mx-4">
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
