"use client";

import type React from "react";

import { useState } from "react";

export default function SupportForm() {
  const [supportType, setSupportType] = useState<"economic" | "member">("economic");
  const [frequency, setFrequency] = useState<"monthly" | "yearly">("monthly");
  const [amount, setAmount] = useState<string>("150");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSupportTypeChange = (type: "economic" | "member") => {
    setSupportType(type);
    // Når "Bliv medlem" bliver klicket, sæt frequency to "yearly"
    if (type === "member") {
      setFrequency("yearly");
      setAmount("250"); // Sæt beløbet til 250 for medlemskab
    } else {
      // Reset to default amount
      setAmount("150");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Tillader kun tal
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Får det endelige beløb
    const finalAmount = amount === "Andet" ? customAmount : amount;

    // Daten som kunne sendes til serveren
    console.log("Form submitted:", {
      supportType,
      frequency,
      amount: finalAmount,
      ...formData,
    });
  };

  return (
    <div id="støt" className="max-w-[1000px] mx-auto">
      {isSubmitted ? (
        <div className="bg-ForestFresh-500 text-MarketLinen-500 p-8 rounded-[20px] text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Tak for at du vil støtte Grønt Marked!</h2>
          <p className="m-auto mb-6">
            Vi har modtaget din information og vil kontakte dig snarest.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2 bg-MarketLinen-500 text-ForestFresh-500 rounded-full hover:bg-white transition-colors duration-300"
          >
            Tilbage til formularen
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left section */}
            <div>
              <h2 className="text-lg font-medium mb-4">Hvordan vil du støtte?</h2>
              <div className="flex rounded-[20px] border-1 border-black relative">
                <div
                  className={`absolute top-0 bottom-0 rounded-[20px] bg-ForestFresh-500 transition-all duration-300 ease-in-out ${
                    supportType === "economic" ? "left-0 right-1/2" : "left-1/2 right-0"
                  }`}
                ></div>
                <button
                  type="button"
                  className={`flex-1 h-full py-2 px-5 rounded-[20px] text-center relative z-10 transition-colors duration-300 ease-in-out ${
                    supportType === "economic" ? "text-MarketLinen-500" : "text-MarketMidnight-500"
                  }`}
                  onClick={() => handleSupportTypeChange("economic")}
                >
                  Økonomisk
                </button>
                <button
                  type="button"
                  className={`flex-1 h-full py-2 px-5 rounded-[20px] text-center relative z-10 transition-colors duration-300 ease-in-out ${
                    supportType === "member" ? "text-MarketLinen-500" : "text-MarketMidnight-500"
                  }`}
                  onClick={() => handleSupportTypeChange("member")}
                >
                  Bliv medlem
                </button>
              </div>
            </div>

            {/* Right section */}
            <div>
              <h2 className="text-lg font-medium mb-4">Hvor ofte vil du støtte?</h2>
              <div className="flex rounded-[20px] border-1 border-black relative">
                <div
                  className={`absolute top-0 bottom-0 rounded-[20px] bg-ForestFresh-500 transition-all duration-300 ease-in-out ${
                    frequency === "monthly" ? "left-0 right-1/2" : "left-1/2 right-0"
                  }`}
                ></div>
                <button
                  type="button"
                  className={`flex-1 h-full py-2 px-4 rounded-[20px] text-center relative z-10 transition-colors duration-300 ease-in-out ${
                    frequency === "monthly" ? "text-MarketLinen-500" : "text-MarketMidnight-500"
                  }`}
                  onClick={() => setFrequency("monthly")}
                >
                  Månedligt
                </button>
                <button
                  type="button"
                  className={`flex-1 h-full py-2 px-4 rounded-[20px] text-center relative z-10 transition-colors duration-300 ease-in-out ${
                    frequency === "yearly" ? "text-MarketLinen-500" : "text-MarketMidnight-500"
                  }`}
                  onClick={() => setFrequency("yearly")}
                >
                  Årligt
                </button>
              </div>
            </div>
          </div>

          {/* Beløb sektion */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Beløb</h2>
            {supportType === "economic" ? (
              <div>
                <div className="flex flex-wrap gap-4 mb-4">
                  {["150", "100", "50", "Andet"].map((option) => (
                    <label key={option} className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center mr-2 transition-all duration-200 ${
                          amount === option ? "border-ForestFresh-500" : "border-gray-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-ForestFresh-500 transition-all duration-200 ${
                            amount === option ? "opacity-100 scale-100" : "opacity-0 scale-0"
                          }`}
                        ></div>
                      </div>
                      <input
                        type="radio"
                        name="amount"
                        value={option}
                        checked={amount === option}
                        onChange={() => setAmount(option)}
                        className="sr-only"
                      />
                      <span>
                        {option} {option !== "Andet" ? "DKK" : ""}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Andet beløb */}
                {amount === "Andet" && (
                  <div className="mt-4 max-w-xs">
                    <div className="relative">
                      <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Indtast beløb"
                        className="w-full px-4 py-3 pr-16 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                        required={amount === "Andet"}
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        DKK
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <div className="w-6 h-6 rounded-full border border-ForestFresh-500 flex items-center justify-center mr-2">
                    <div className="w-4 h-4 rounded-full bg-ForestFresh-500"></div>
                  </div>
                  <input
                    type="radio"
                    name="amount"
                    value="250"
                    checked={true}
                    onChange={() => setAmount("250")}
                    className="sr-only"
                  />
                  <span>250 DKK</span>
                </label>
              </div>
            )}
          </div>

          {/* Form felter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Fornavn"
                className="w-full px-4 py-3 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Efternavn"
                className="w-full px-4 py-3 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Adresse"
                className="w-full px-4 py-3 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="By"
                className="w-full px-4 py-3 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="Postnummer"
                className="w-full px-4 py-3 rounded-full border bg-transparent border-MarketLinen-800 focus:outline-none focus:ring-2 focus:ring-ForestFresh-500"
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <button type="submit" className="flex items-center cursor-pointer">
              <div className="relative w-40 h-64 flex justify-center items-center">
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <img src="/icons/KnapBlack.svg" alt="" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite_reverse]">
                  <img src="/icons/KnapBlack.svg" alt="" className="w-full h-full" />
                </div>

                <img src="/icons/ArrowBlack.svg" alt="" />
              </div>

              {supportType === "economic" ? "Støt nu" : "Bliv medlem nu"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
