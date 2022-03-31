import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .min(4, "Too Short!")
    .max(40, "Too Long!")
    .required("This field is required"),
  password: yup
    .string()
    .min(6, "Too short password")
    .max(30, "Too long")
    .required("This field is required"),
});
