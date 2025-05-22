import { useState } from "react";

// Helper function to conditionally join class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const profiles = [
  {
    id: 1,
    name: "Viola",
    image: "/profil/Viola.webp",
    description: [
      "Viola stammer fra det sydlige Sardinien, og har i stort set hele sit liv været engageret i madens verden. Hun har studeret, arbejdet, advokeret, tilberedt og dyrket mad med passion og dedikation.",
      "Ligesom persille og basilikum på toppen af en lækker pasta, er hun en uundværlig del af alt, hvad der sker på Grønt Marked.",
    ],
  },
  {
    id: 2,
    name: "Rich",
    image: "/profil/Rich.webp",
    description: [
      "Rich kommer fra England og har en baggrund i både mad og økonomi. Til daglig arbejder han som møller på Kornby Mølle, samtidig med at han varetager rollen som markedslogistiker.",
      "Hans primære interesse ligger i den økonomisk-politiske side af vores fødevaresystemer, hvor han brænder for at skabe mere gennemsigtighed og bæredygtighed.",
    ],
  },
  {
    id: 3,
    name: "Gerard",
    image: "/profil/Gerard.webp",
    description: [
      "Gerard er vokset op rundt omkring i verden og bringer en bred erfaring og stor alsidighed med sig. Han er vores handyman, logistikansvarlige og praktiske problemløser – kort sagt: markedets lille guldklump.",
      "Uanset hvad der opstår af udfordringer, kan vi regne med, at Gerard finder en løsning med ro og overskud.",
    ],
  },
  {
    id: 4,
    name: "Caro",
    image: "/profil/Caro.webp",
    description: [
      "Caro kommer fra Tyskland og har en baggrund inden for fødevareteknologi og landbrugsudvikling. Hun står for al koordinering og fundraising hos Grønt Marked og sikrer, at det hele hænger sammen – både praktisk og økonomisk.",
      "Med skarp sans for struktur og udvikling er hun en uundværlig drivkraft bag kulisserne.",
    ],
  },
  {
    id: 5,
    name: "Silke",
    image: "/profil/Silke.webp",
    description: [
      "Silke er fra København og står for al kommunikation, formidling, hjemmeside og fotografi hos Grønt Marked.",
      "Med en baggrund i kommunikation og kulturstudier samt erfaring fra hospitality-branchen, formår hun at fortælle markedets historie med både varme og skarphed – i ord såvel som billeder.",
    ],
  },
];

export default function ProfileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? profiles.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex === profiles.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl">
      <div className="bg-[#2A4837] rounded-3xl flex flex-col gap-10 md:flex-row relative">
        {/* Left side - Image */}
        <div className="md:w-2/5 relative">
          <div className="h-full">
            <img
              src={profiles[activeIndex].image}
              alt={profiles[activeIndex].name}
              className="object-cover w-full h-full transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-3/5 p-6 md:p-8 text-white relative flex flex-col self-center">
          <div className="flex-grow">
            <h3 className="text-MarketLinen-500 mb-6">{profiles[activeIndex].name}</h3>

            {profiles[activeIndex].description.map((paragraph, idx) => (
              <p key={idx} className="text-MarketLinen-500 mb-6 w-2/3">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-auto pt-4">
            <div className="flex items-center justify-end">
              <button
                onClick={goToPrevious}
                aria-label="Previous profile"
                className="border-none p-0 cursor-pointer z-20 rotate-180"
              >
                <img src="/icons/Arrow.svg" alt="Previous" />
              </button>
              <img
                src="/icons/Arrow.svg"
                alt="Next"
                onClick={goToNext}
                className="cursor-pointer"
                aria-label="Next profile"
              />
            </div>

            {/* Pagination prikker */}
            <div className="flex justify-end mt-2">
              {profiles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "w-3 h-3 mx-1 rounded-full transition-colors",
                    activeIndex === idx ? "bg-white" : "bg-white/40"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              {[...Array(5 - profiles.length)].map((_, idx) => (
                <button
                  key={`extra-${idx}`}
                  className="w-3 h-3 mx-1 rounded-full bg-white/40"
                  aria-label={`Placeholder dot ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
