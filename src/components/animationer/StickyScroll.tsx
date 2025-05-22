import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Catering til event",
    description:
      "Lad os tage vores farm-to-table filosofi med til dit event. Vi skræddersyr en menu med sæsonens bedste lokale råvarer – tilpasset dine ønsker og behov. Perfekt til alt fra intime sammenkomster til større arrangementer.",
    titleButton: (
      <a href="mailto:hello1@groentmarled.dk?subject=Catering &body=Hejsa">
        <div className="flex items-center cursor-pointer">
          <div className="relative w-40 h-64 flex justify-center items-center">
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <img src="/icons/KnapBlack.svg" alt="Stor sort knap" className="w-full h-full" />
            </div>
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite_reverse]">
              <img src="/icons/KnapBlack.svg" alt="Stor sort knap" className="w-full h-full" />
            </div>

            <img src="/icons/ArrowBlack.svg" alt="Sort pil" />
          </div>
          <div>
            <p>Send en forespørgsel</p>
          </div>
        </div>
      </a>
    ),
    content: (
      <img src="/arrangementer/2.webp" alt="arrangementer" className="h-full w-full object-cover" />
    ),
  },
  {
    title: "Privat middag",
    description:
      "Oplev Grønt Marked Køkken gennem en privat middag. Nyd sæsonbaserede retter lavet med lokale råvarer og få tips til bæredygtig madlavning fra vores kokke.",
    content: (
      <img src="/arrangementer/3.webp" alt="arrangementer" className="h-full w-full object-cover" />
    ),
  },
  {
    title: "Workshops",
    description:
      "Dyk ned i din passion for god mad og bæredygtighed på vores hands-on workshops. Lær at lave mad med sæsonens råvarer, sanke, konservere og udforske, hvordan vi sammen kan skabe et mere retfærdigt og robust fødevaresystem.",
    content: (
      <img src="/arrangementer/4.webp" alt="arrangementer" className="h-full w-full object-cover" />
    ),
  },
  {
    title: "Markedskøkkenet",
    description:
      "Besøg vores markedskøkken og oplev, hvordan sæsonens råvarer bliver til smagfulde retter. Tag ingredienser og specialvarer med hjem og genskab oplevelsen i dit eget køkken.",
    content: (
      <img src="/arrangementer/5.webp" alt="arrangementer" className="h-full w-full object-cover" />
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
