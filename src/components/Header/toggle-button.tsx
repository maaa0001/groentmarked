import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Toggle() {
  const [selected, setSelected] = useState<"guest" | "producer">("guest");

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (
      currentPath === "/producent" ||
      currentPath.startsWith("/producent/") ||
      currentPath.includes("/log-ind")
    ) {
      setSelected("producer");
    } else {
      setSelected("guest");
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex rounded-[20px] border-[1.2px] border-MarketLinen-500 p-0.5 w-[200px] h-[43px] ">
        <a
          href="/"
          onClick={() => setSelected("guest")}
          className={cn(
            "relative z-10 w-1/2 py-1 pt-2 text-center text-sm md:text-sm transition-colors duration-200 rounded-[20px] cursor-pointer",
            selected === "guest" ? "text-MarketLinen-500" : "text-MarketLinen-500"
          )}
        >
          Gæst
        </a>

        <a
          href="/producent"
          onClick={() => setSelected("producer")}
          className={cn(
            "relative z-10 w-1/2 py-1 pt-2 text-center text-sm md:text-sm transition-colors duration-200 rounded-[20px] cursor-pointer",
            selected === "producer" ? "text-MarketLinen-500" : "text-MarketLinen-500"
          )}
        >
          Producent
        </a>

        <div
          className={cn(
            "absolute h-[43px] left-0 right-[-1px] top-[-1px] bottom-0 w-[50%] bg-MarketMidnight-500 border-[1.2px] border-MarketLinen-500 rounded-[20px] transition-transform duration-200 ease-in-out",
            selected === "producer" ? "translate-x-[calc(100%)]" : ""
          )}
        />
      </div>
    </div>
  );
}
