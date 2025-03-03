import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema"; // استيراد schema
import RegisterDetails from "../../Sections/RegisterDetails/RegisterDetails";
import RegionalSettings from "../../Sections/RegionalSettings/RegionalSettings"
import VatRegister from "../../Sections/VatRegister/VatRegister";
const Register = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-100 md:w-3/4">
        <h2 className="text-lg text-gray-800 font-semibold mb-4 text-center md:text-xl md:font-sans lg:text-3xl">
         Register
        </h2>
        <hr className="mb-4 w-7 rounded-md bg-gray-400 m-auto p-0.5" />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RegisterDetails />
            <RegionalSettings />
            <VatRegister />
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Register;
