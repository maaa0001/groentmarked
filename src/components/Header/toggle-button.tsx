import { useState } from "react";
import { cn } from "@/lib/utils";

export function Toggle() {
  const [selected, setSelected] = useState<"guest" | "producer">("guest");

  return (
    <div className="flex items-center justify-center  ">
      <div className="relative flex rounded-full border-2 border-white p-0.5 w-[300px]">
        <button
          onClick={() => setSelected("guest")}
          className={cn(
            "relative z-10 w-1/2 py-1 text-center text-lg font-medium transition-colors duration-200 rounded-full",
            selected === "guest" ? "text-white" : "text-white"
          )}
        >
          Gæst
        </button>
        <button
          onClick={() => setSelected("producer")}
          className={cn(
            "relative z-10 w-1/2 py-1 text-center text-lg font-medium transition-colors duration-200 rounded-full",
            selected === "producer" ? "text-white" : "text-white"
          )}
        >
          Producent
        </button>
        <div
          className={cn(
            "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#2A4837] border-2 border-white rounded-full transition-transform duration-200 ease-in-out",
            selected === "producer" ? "translate-x-[calc(100%)]" : ""
          )}
        />
      </div>
    </div>
  );
}
