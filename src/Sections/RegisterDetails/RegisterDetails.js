import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
const RegisterDetails = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [showFields, setShowFields] = useState(false);

  const toggleFields = () => {
    setShowFields(!showFields);
  };

  const handleIndustryToggle = () => {
    setIsIndustryOpen(!isIndustryOpen);
  };

  const handleCountryToggle = () => {
    setIsCountryOpen(!isCountryOpen);
  };

  const handleStateToggle = () => {
    setIsStateOpen(!isStateOpen);
  };

  const handleChange = (e, fieldName) => {
    setValue(fieldName, e.target.value);
    if (fieldName === "industry") setIsIndustryOpen(false);
    if (fieldName === "country") setIsCountryOpen(false);
    if (fieldName === "emirate") setIsStateOpen(false);
  };
  return (
    <>
      <div className="  mt-2 md:mt-10">
        <h3 className="text-xs text-gray-400 font-semibold mb-4 text-left md:font-sans md:text-sm lg:text-xl">
          ORGANIZATION DETAILS
        </h3>

        <div className="mb-4">
          <label
            htmlFor="organizationName"
            className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
          >
            Organization Name
          </label>
          <input
            {...register("organizationName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.organizationName && (
            <p className="text-red-500 text-xs italic">
              {errors.organizationName.message}
            </p>
          )}
        </div>

        <div className=" relative">
          <label
            htmlFor="industry"
            className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
          >
            Industry
          </label>
          <select
            {...register("industry")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
            onClick={handleIndustryToggle}
            onChange={(e) => handleChange(e, "industry")}
          >
            <option value="" className="w-1/2"></option>
            <option value="technology" className="w-1/2">
              Technology
            </option>
            <option value="finance" className="w-1/2">
              Finance
            </option>
            <option value="healthcare" className="w-1/2">
              Healthcare
            </option>
          </select>
          <IoIosArrowDown
            color="black"
            size={18}
            className={`arrow absolute top-10 right-3 transition-transform pointer-events-none ${
              isIndustryOpen ? "transform rotate-180" : ""
            }`}
          />
          {errors.industry && (
            <p className="text-red-500 text-xs italic">
              {errors.industry.message}
            </p>
          )}
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {" "}
            {/* إضافة grid هنا */}
            <div className="relative">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
              >
                Country
              </label>
              <select
                {...register("country")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                onClick={handleCountryToggle}
                onChange={(e) => handleChange(e, "country")}
              >
                <option value=""></option> {/* إزالة className="w-1/2" */}
                <option value="technology">Technology</option>{" "}
                {/* إزالة className="w-1/2" */}
                <option value="finance">Finance</option>{" "}
                {/* إزالة className="w-1/2" */}
                <option value="healthcare">Healthcare</option>{" "}
                {/* إزالة className="w-1/2" */}
              </select>
              <IoIosArrowDown
                color="black"
                size={18}
                className={`arrow absolute top-10 right-3 transition-transform pointer-events-none ${
                  isCountryOpen ? "transform rotate-180" : ""
                }`}
              />
              {errors.organizationLocation && (
                <p className="text-red-500 text-xs italic">
                  {errors.organizationLocation.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
              >
                Mobile
              </label>
              <input
                type="tel"
                {...register("mobile")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs italic">
                  {errors.mobile.message}
                </p>
              )}
            </div>
          </div>

          <div className="pt-2 pb-2 text-center">
            {" "}
            {/* تعديل هنا */}
            <button
              onClick={toggleFields}
              className="flex items-center rounded hover:bg-gray-100 transition-colors duration-200"
            >
              <CgAdd size={16} color="blue" className="mr-2 text-gray-600" />{" "}
              {/* تصغير حجم الأيقونة */}
              <p className="text-gray-700 font-semibold">
                Add Organization Address
              </p>
            </button>
            {showFields && (
              <div className="w-full flex flex-col md:flex-row md:flex-wrap">
                {/* تعديل هنا */}
                <div className="mb-4 w-full md:w-1/2 pr-2">
                  {/* تعديل هنا */}
                  <label
                    htmlFor="street1"
                    className="flex  flex-start text-left text-gray-700 text-sm font-bold pb-2 md:block md:text-lg"
                  >
                    Street 1
                  </label>
                  <input
                    type="text"
                    placeholder="Street 1"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full md:w-1/2">
                  {" "}
                  {/* تعديل هنا */}
                  <label
                    htmlFor="street2"
                    className="flex  flex-start text-left text-gray-700 text-sm font-bold pb-2 md:block md:text-lg"
                  >
                    Street 2
                  </label>
                  <input
                    type="text"
                    placeholder="Street 2"
                    className="flex  flex-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-full md:w-1/2">
                  {" "}
                  {/* تعديل هنا */}
                  <label
                    htmlFor="city"
                    className="flex  flex-start text-left text-gray-700 text-sm font-bold pb-2 md:text-lg md:block"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <div className="relative">
              <label
                htmlFor="state"
                className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
              >
                State
              </label>
              <select
                {...register("State")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                onClick={handleStateToggle}
                onChange={(e) => handleChange(e, "state")}
              >
                <option value=""></option> {/* إزالة className="w-1/2" */}
                <option value="technology">Technology</option>{" "}
                {/* إزالة className="w-1/2" */}
                <option value="finance">Finance</option>{" "}
                {/* إزالة className="w-1/2" */}
                <option value="healthcare">Healthcare</option>{" "}
                {/* إزالة className="w-1/2" */}
              </select>
              <IoIosArrowDown
                color="black"
                size={18}
                className={`arrow absolute top-10 right-3 transition-transform pointer-events-none ${
                  isStateOpen ? "transform rotate-180" : ""
                }`}
              />
              {errors.State && (
                <p className="text-red-500 text-xs italic">
                  {errors.State.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="postalCode"
              className="block text-gray-700 text-sm font-bold mb-2 md:text-lg"
            >
              Postal Code
            </label>
            <input
              type="text"
              {...register("postalCode")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs italic">
                {errors.postalCode.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterDetails;
