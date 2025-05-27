"use client";

import type React from "react";
import { useState } from "react";
import Button from "../Button.astro";

type Event = {
  id: number;
  titel: string;
  day: string;
  date: number;
  month: string;
  time: string;
  address: string;
  online: boolean;
  description: string;
};

// Data
const calendarData: Event[] = [
  {
    id: 1,
    titel: "Marked - Gammelholm",
    day: "Søn",
    date: 4,
    month: "Maj",
    time: "10:00-15:00",
    address: "Havnegade 54, 1058 København",
    online: false,
    description:
      "Kom og oplev det hyggelige marked ved Gammelholm med lokale producenter og friske råvarer direkte fra gården.",
  },
  {
    id: 2,
    titel: "Gårdbesøg",
    day: "Tors",
    date: 8,
    month: "Maj",
    time: "12:00-16:00",
    address: "Æblehaven 9, 4320 Lejre",
    online: false,
    description:
      "Tag med på en guidet tur rundt på gården og lær om økologisk landbrug og bæredygtig produktion.",
  },
  {
    id: 3,
    titel: "Webinar",
    day: "Lør",
    date: 17,
    month: "Maj",
    time: "12:00-14:00",
    address: "Online",
    online: true,
    description:
      "Online webinar om fremtidens fødevareproduktion og hvordan vi kan skabe mere bæredygtige løsninger.",
  },
  {
    id: 4,
    titel: "Marked - Nørrebro",
    day: "Søn",
    date: 18,
    month: "Maj",
    time: "10:00-15:00",
    address: "Skjolds Plads, 2200 København",
    online: false,
    description:
      "Nørrebros populære marked med økologiske produkter, street food og lokale håndværkere.",
  },
  {
    id: 5,
    titel: "Webinar",
    day: "Tirs",
    date: 20,
    month: "Maj",
    time: "17:00-20:00",
    address: "Online",
    online: true,
    description:
      "Lær om sæsonens bedste råvarer og få tips til hvordan du kan lave lækre retter derhjemme.",
  },
  {
    id: 6,
    titel: "Workshop",
    day: "Tors",
    date: 22,
    month: "Maj",
    time: "17:00-20:00",
    address: "Grønttorvet 7 2200 København N,",
    online: false,
    description:
      "Hands-on workshop hvor du lærer at lave fermenterede grøntsager og andre sunde snacks.",
  },
  {
    id: 7,
    titel: "Gårdbesøg",
    day: "Lør",
    date: 24,
    month: "Maj",
    time: "12:00-16:00",
    address: "Markedspladsen 8, 8260 Viby J",
    online: false,
    description:
      "Besøg en traditionel dansk gård og mød dyrene, mens du lærer om ansvarlig dyrevelfærd.",
  },
  {
    id: 8,
    titel: "Marked - Vesterbro",
    day: "Søn",
    date: 25,
    month: "Maj",
    time: "12:00-16:00",
    address: "Litauens Plads, København",
    online: false,
    description:
      "Vesterbros charmerende marked med fokus på lokale delikatesser og håndlavede produkter.",
  },
  {
    id: 9,
    titel: "Gårdbesøg",
    day: "Tirs",
    date: 27,
    month: "Maj",
    time: "16:00-20:00",
    address: "Krydderurteparken 6, 7100 Vejle",
    online: false,
    description:
      "Oplev Danmarks største krydderurtehave og lær om de mange anvendelsesmuligheder for friske urter.",
  },
  {
    id: 10,
    titel: "Workshop",
    day: "Tors",
    date: 29,
    month: "Maj",
    time: "17:00-19:00",
    address: "Grønttorvet 7, 2200 København N",
    online: false,
    description:
      "Kreativ workshop hvor du lærer at lave dine egne krydderiblandinger og marinader.",
  },
  {
    id: 11,
    titel: "Middag for biodiversitet",
    day: "Fre",
    date: 30,
    month: "Maj",
    time: "17:00-20:00",
    address: "Høstgade 9, 1750 København V",
    online: false,
    description:
      "Eksklusiv middag lavet af lokale kokke med fokus på biodiversitet og sjældne plantesorter.",
  },
  {
    id: 12,
    titel: "Webinar",
    day: "Lør",
    date: 31,
    month: "Maj",
    time: "10:00-14:00",
    address: "Online",
    online: true,
    description:
      "Omfattende webinar om klimavenlig madlavning og hvordan du kan reducere dit CO2-aftryk.",
  },
  {
    id: 13,
    titel: "Marked - Gammelholm",
    day: "Søn",
    date: 1,
    month: "Juni",
    time: "10:00-15:00",
    address: "Havnegade 54, 1058 København",
    online: false,
    description:
      "Kom og oplev det hyggelige marked ved Gammelholm med lokale producenter og friske råvarer direkte fra gården.",
  },
  {
    id: 14,
    titel: "Middag for biodiversitet",
    day: "Fre",
    date: 6,
    month: "Juni",
    time: "17:00-20:00",
    address: "Høstgade 9, 1750 København V",
    online: false,
    description:
      "Eksklusiv middag lavet af lokale kokke med fokus på biodiversitet og sjældne plantesorter.",
  },
  {
    id: 15,
    titel: "Marked - Vesterbro",
    day: "Søn",
    date: 8,
    month: "Juni",
    time: "10:00-15:00",
    address: "Litauens Plads, København",
    online: false,
    description:
      "Vesterbros charmerende marked med fokus på lokale delikatesser og håndlavede produkter.",
  },
  {
    id: 16,
    titel: "Webinar",
    day: "Lør",
    date: 14,
    month: "Juni",
    time: "12:00-14:00",
    address: "Online",
    online: true,
    description:
      "Online webinar om fremtidens fødevareproduktion og hvordan vi kan skabe mere bæredygtige løsninger.",
  },
  {
    id: 17,
    titel: "Marked - Frederiksberg",
    day: "Søn",
    date: 15,
    month: "Juni",
    time: "10:00-15:00",
    address: "Aksel Møllers Have, Frederiksberg",
    online: false,
    description:
      "Frederiksbergs grønne marked omgivet af smukke haver og med et stort udvalg af økologiske produkter.",
  },
  {
    id: 18,
    titel: "Gårdbesøg",
    day: "Ons",
    date: 18,
    month: "Juni",
    time: "16:00-20:00",
    address: "Krydderurteparken 6, 7100 Vejle",
    online: false,
    description:
      "Oplev Danmarks største krydderurtehave og lær om de mange anvendelsesmuligheder for friske urter.",
  },
  {
    id: 19,
    titel: "Marked - Nørrebro",
    day: "Søn",
    date: 22,
    month: "Juni",
    time: "10:00-15:00",
    address: "Skjolds Plads, 2200 København N",
    online: false,
    description:
      "Nørrebros populære marked med økologiske produkter, street food og lokale håndværkere.",
  },
  {
    id: 20,
    titel: "Webinar",
    day: "Lør",
    date: 28,
    month: "Juni",
    time: "12:00-14:00",
    address: "Online",
    online: true,
    description:
      "Lær om sæsonens bedste råvarer og få tips til hvordan du kan lave lækre retter derhjemme.",
  },
];

// Modal component
const EventModal: React.FC<{ event: Event; onClose: () => void }> = ({ event, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-[#0000007c]  bg-opacity-30 flex items-end justify-center z-20 p-4"
      onClick={handleOverlayClick}
    >
      <article className="bg-[#2A4837] grid grid-rows-3 w-full max-w-xl  mx-auto rounded-3xl mb-10 overflow-hidden">
        <div
          className="row-span-1 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/jordbær.webp?height=200&width=400')" }}
        >
          <img
            className="ml-auto pt-2 pr-2 cursor-pointer"
            src="/icons/Kryds.svg"
            alt="Kryds icon"
            onClick={onClose}
          />
          <h2 className="text-MarketLinen-500 text-center px-4 pb-4">Kom med til {event.titel}</h2>
        </div>
        <div className="row-span-2 p-5">
          <h3 className="text-MarketLinen-500 mb-3">{event.titel}</h3>
          <p className="text-MarketLinen-500 mb-2">
            <strong>Tidspunkt:</strong> {event.day}. {event.date}. {event.month} - {event.time}
          </p>
          <p className="text-MarketLinen-500 mb-4">
            <strong>Adresse:</strong> {event.address}
          </p>
          <p className="text-MarketLinen-500 mb-6  leading-relaxed">{event.description}</p>
          <div className="flex items-center cursor-pointer">
            <div className="relative w-40 h-40 flex justify-center items-center mr-4">
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                <img src="/icons/Knap.svg" alt="Stor sort knap" className="w-full h-full" />
              </div>
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite_reverse]">
                <img src="/icons/Knap.svg" alt="Stor sort knap" className="w-full h-full" />
              </div>

              <img src="/icons/ArrowGold.svg" alt="Sort pil" />
            </div>
            <div>
              <p className="text-GoldenGrain-500">Tilmeld dig nu</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

// Card component
const EventCard: React.FC<{ event: Event; onClick: () => void }> = ({ event, onClick }) => {
  return (
    <div className="flex-1/4">
      <article
        className="w-[200px] h-[315px] m-auto flex-1/3 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        <div className="text-sm border-b-1 border-black">{event.day}</div>
        <div className="grid grid-cols-3 border-b-1 border-black my-2">
          <p className="text-9xl align-middle col-span-2 m-auto">{event.date}</p>
          <p className="text-2xl ml-3 mt-2">{event.month}</p>
        </div>
        <div className="grid grid-cols-6 gap-y-4 mt-2 items-center">
          <h4 className="col-span-6">{event.titel}</h4>
          <img className="col-span-1" src="/icons/Ur.svg" alt="Clock icon" />
          <p className="col-span-5">{event.time}</p>
          <img src="/icons/Pin.svg" alt="Pin location icon" />
          <div className="col-span-5 min-h-10 content-center">
            <p className="">{event.address}</p>
          </div>
        </div>
        <button className="lg:hidden mt-2 w-full font-bold border-1 border-MarketMidnight-500  text-MarketMidnight-500  hover:text-black cursor-pointer px-[32px] py-[10px] text-xs md:text-sm rounded-[20px]">
          Læs mere
        </button>
      </article>
    </div>
  );
};

const Dropdown: React.FC<{
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}> = ({ label, options, value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-GoldenGrain-300 border border-black rounded-full appearance-none cursor-pointer pr-10 focus:outline-none"
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        >
          <option value="all">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-[13px] pointer-events-none">
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Filtrering
const EventCalendar: React.FC<{ events?: Event[] }> = ({ events = calendarData }) => {
  const [monthFilter, setMonthFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [onlineFilter, setOnlineFilter] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Får unike måneder og event typer fra daten
  const months = Array.from(new Set(events.map((event) => event.month)));
  const eventTypes = Array.from(new Set(events.map((event) => event.titel)));

  // Filtrer producenterne baseret på filtrering
  const filteredEvents = events.filter((event) => {
    const matchesMonth = monthFilter === "all" || event.month === monthFilter;
    const matchesType = typeFilter === "all" || event.titel === typeFilter;
    const matchesOnline =
      onlineFilter === "all" ||
      (onlineFilter === "Online" && event.online) ||
      (onlineFilter === "Fysisk" && !event.online);

    return matchesMonth && matchesType && matchesOnline;
  });

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Filtrering */}
      <div className="rounded-lg mb-25">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Dropdown
            label="Hvilken måned ønsker du at se?"
            options={months}
            value={monthFilter}
            onChange={setMonthFilter}
            placeholder="Vælg måned"
          />

          <Dropdown
            label="Hvilken begivenhed leder du efter?"
            options={eventTypes}
            value={typeFilter}
            onChange={setTypeFilter}
            placeholder="Vælg begivenhed"
          />

          <Dropdown
            label="Deltager du online eller fysisk?"
            options={["Online", "Fysisk"]}
            value={onlineFilter}
            onChange={setOnlineFilter}
            placeholder="Vælg tilstedeværelse"
          />
        </div>
      </div>

      {/* Grid */}
      <h3 className="text-MarketMidnight-500 mb-[60px]">Det sker hos Grønt Marked</h3>
      <div className="flex flex-row flex-wrap gap-y-[100px] gap-x-5">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
        ))}
      </div>

      {/* Empty state */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black">Ingen begivenheder fundet med de valgte filtre.</p>
        </div>
      )}

      {/* Modal */}
      {selectedEvent && <EventModal event={selectedEvent} onClose={handleCloseModal} />}
    </div>
  );
};

export default EventCalendar;
