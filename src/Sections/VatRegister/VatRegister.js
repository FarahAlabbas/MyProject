import React from "react";
import { Switch } from "antd";
import { useFormContext } from "react-hook-form";
import { FiInfo } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const VatRegister = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isVatRegistered, setIsVatRegistered] = React.useState(false);

  const handleToggle = () => {
    setIsVatRegistered(!isVatRegistered);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-4 mt-6">
        <label className="mr-2 text-sm font-medium text-gray-700 md:text-lg ">
          Is this business registered for VAT?
        </label>
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium text-gray-900">
            {isVatRegistered ? "Yes" : "No"}
          </span>
          <Switch checked={isVatRegistered} onChange={handleToggle} />
        </div>
      </div>

      {isVatRegistered && ( // إضافة شرط isVatRegistered
        <div>
          <div className="grid grid-cols-1 gap-2 mb-4 md:grid-cols-2 md:gap-2">
            <div className="flex flex-col w-full md:w-4/5">
              <label className="block text-gray-700 text-sm font-bold mb-2 md:text-lg">
                Tax Registration Number Label
              </label>
              <input
                type="text"
                {...register("taxRegistrationNumberLabel")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="TRN"
              />
              {errors.taxRegistrationNumberLabel && (
                <p className="text-red-500 text-xs italic">
                  {errors.taxRegistrationNumberLabel.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full md:w-4/5">
              <label className="block text-gray-700 text-sm font-bold mb-2 md:text-lg">
                Tax Registration Number (TRN)*
              </label>
              <div className="flex items-start flex-col">
                <input
                  type="text"
                  {...register("taxRegistrationNumber")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter TRN"
                />
                {errors.taxRegistrationNumber && (
                  <p className="text-red-500 text-xs italic">
                    {errors.taxRegistrationNumber.message}
                  </p>
                )}
                <button className=" mt-2 text-sm text-start text-blue-600 hover:text-blue-800">
                  Validate TRN
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 md:text-lg">
              VAT Registered On
            </label>
            <input
              type="text"
              {...register("vatRegisteredOn")} // إضافة {...register("vatRegisteredOn")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 md:w-1/2"
            />
          </div>
        </div>
      )}

      <p className="text-sm flex items-center  text-gray-600 mb-4">
        <FiInfo size={20} className="mr-2 flex items-start" />
        Configure the international trade and tax return preferences in your
        organization by navigating to Settings &gt; Taxes.
      </p>

      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-semibold text-gray-700 mb-2">Note:</p>
        <ul className="list-none text-sm text-gray-600">
          <li className="mb-1 flex items-center">
            <GoDotFill className="mr-1 text-xs" />
            You can update some of these preferences from Settings anytime.
          </li>
          <li className="mb-2 flex items-center">
            <GoDotFill size={15} className="mr-1 mb-5 text-xs" />
            The language you select on this page will be the default language
            for the following features even if you change the language later:
          </li>
          <li className="ml-4">
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
              <div>
                <div className="flex items-center">
                  <GoDotFill className="mr-1 text-xs" />
                  Chart of Accounts
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <GoDotFill className="mr-1 text-xs" />
                  Email Templates
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <GoDotFill className="mr-1 text-xs" />
                  Template Customizations
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <GoDotFill className="mr-1 text-xs" />
                  Payment Modes
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <GoDotFill className="mr-1 text-xs" />
                  Default Tax Rates
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VatRegister;
