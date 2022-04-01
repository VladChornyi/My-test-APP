import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

import { login, register } from "../../helpers/authorization";
import SubmitBtn from "../SubmitBtn";
import { Wrapper } from "./AuthForm.styled";
import { validationSchema } from "./validationSchema";

const AuthForm = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(true);

  return (
    <Wrapper>
      <div className="signup">
        <button
          className="state-button"
          onClick={() => {
            setIsSignUpPage(true);
          }}
          disabled={isSignUpPage}
          type="button"
        >
          Sign up
        </button>
        <button
          className="state-button"
          onClick={() => {
            setIsSignUpPage(false);
          }}
          disabled={!isSignUpPage}
          type="button"
        >
          Log in
        </button>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={({ email, password }) => {
            if (isSignUpPage) {
              register(email, password);
            } else {
              login(email, password);
            }
          }}
        >
          <Form className="auth-form">
            <div className="input-wrapper">
              <label className="label">
                <Field
                  className="auth-input"
                  name="email"
                  placeholder="Email"
                  type="text"
                />
                <ErrorMessage
                  name="email"
                  render={(message) => <p className="error">{message}</p>}
                />
              </label>
              <label className="label">
                <Field
                  className="auth-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  render={(message) => <p className="error">{message}</p>}
                />
              </label>
            </div>
            <SubmitBtn content={isSignUpPage ? "Sign up" : "Log in"} />
          </Form>
        </Formik>
      </div>
    </Wrapper>
  );
};

export default AuthForm;
