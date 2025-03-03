import * as Yup from "yup";

const schema = Yup.object().shape({
  organizationName: Yup.string().required("organizationName is required"),
  industry: Yup.string().required("industry is required"),
  organizationLocation: Yup.string().required(
    "Organization Location is required"
  ),
  emirate: Yup.string().required("Emirate is required"),
  currency: Yup.string().required("Currency is required"),
  language: Yup.string().required("Language is required"),
  timeZone: Yup.string().required("Time Zone is required"),
  isBusinessRegisteredForVAT: Yup.boolean().required(
    "VAT Registration is required"
  ),
  taxRegistrationNumberLabel: Yup.string().when("isBusinessRegisteredForVAT", {
    is: true,
    then: Yup.string().required("Tax Registration Number Label is required"),
  }),
  taxRegistrationNumber: Yup.string().when("isBusinessRegisteredForVAT", {
    is: true,
    then: Yup.string().required("Tax Registration Number is required"),
  }),
});

export default schema;
