import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

const RegionalSettings = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleCurrencyToggle = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleChange = (e, fieldName) => {
    setValue(fieldName, e.target.value);
    if (fieldName === "currency") setIsCurrencyOpen(false);
    if (fieldName === "language") setIsLanguageOpen(false);
  };

  const RegionalSettings = () => {
    return (
      <>
        <div className="mt-2  md:mt-10">
          <h3 className="text-xs text-gray-400 font-semibold mb-4 text-left md:font-sans md:text-sm lg:text-xl">
            Regional Settings
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {" "}
            {/* تعديل هنا */}
            <div className="relative">
              <label
                htmlFor="currency"
                className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
              >
                Currency
              </label>
              <select
                {...register("currency")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                onClick={handleCurrencyToggle}
                onChange={(e) => handleChange(e, "currency")}
              >
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AED">AED</option>
              </select>
              <IoIosArrowDown
                color="black"
                size={18}
                className={`arrow absolute top-10 right-3 transition-transform pointer-events-none ${
                  isCurrencyOpen ? "transform rotate-180" : ""
                }`}
              />
              {errors.currency && (
                <p className="text-red-500 text-xs italic">
                  {errors.currency.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="language"
                className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
              >
                Language
              </label>
              <select
                {...register("language")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                onClick={handleLanguageToggle}
                onChange={(e) => handleChange(e, "language")}
              >
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
              <IoIosArrowDown
                color="black"
                size={18}
                className={`arrow absolute top-10 right-3 transition-transform pointer-events-none ${
                  isLanguageOpen ? "transform rotate-180" : ""
                }`}
              />
              {errors.language && (
                <p className="text-red-500 text-xs italic">
                  {errors.language.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 pb-5">
            <label
              htmlFor="timeZone"
              className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
            >
              Time Zone
            </label>
            <input
              {...register("timeZone")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.timeZone && (
              <p className="text-red-500 text-xs italic">
                {errors.timeZone.message}
              </p>
            )}
          </div>
        </div>
      </>
    );
  };

  
};

export default RegionalSettings;
