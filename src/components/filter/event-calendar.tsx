import type React from "react";
import { useState } from "react";

type Event = {
  id: number;
  titel: string;
  day: string;
  date: number;
  month: string;
  time: string;
  address: string;
  online: boolean;
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
  },
];

// Card component
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="flex-1/4">
      <article className="w-[200px] h-[315px] m-auto flex-1/3">
        <div className="text-sm border-b-1 border-black">{event.day}</div>
        <div className="grid grid-cols-3 border-b-1 border-black my-2">
          <p className="text-9xl align-middle col-span-2 m-auto">{event.date}</p>
          <p className="text-2xl ml-3 mt-2">{event.month}</p>
        </div>
        <div className="grid grid-cols-6 gap-y-4 mt-2">
          <h4 className="col-span-6">{event.titel}</h4>
          <img className="col-span-1" src="/icons/Ur.svg" alt="Clock icon" />
          <p className="col-span-5">{event.time}</p>
          <img src="/icons/Pin.svg" alt="Pin location icon" />
          <p className="col-span-5">{event.address}</p>
        </div>
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
          className="w-full px-4 py-3 bg-GoldenGrain-300 border border-black rounded-full appearance-none webkit-appearance-none  moz-appearance-none cursor-pointer pr-10 focus:outline-none selector"
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filtrering */}
      <div className="p-6 rounded-lg mb-8">
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
      <h3>Det sker hos Grønt Marked</h3>
      <div className="flex flex-row flex-wrap gap-y-[100px]">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Empty state */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-black">Ingen begivenheder fundet med de valgte filtre.</p>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
