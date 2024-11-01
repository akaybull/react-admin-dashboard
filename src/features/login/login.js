import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

// Yup şeması
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin.")
    .required("E-posta gereklidir."),
  password: yup
    .string()
    .required("Lütfen şifrenizi girin.")
    .min(4, "Şifre en az 4 karakter olmalıdır."),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Form gönderildiğinde yapılacak işlemler
    console.log("Giriş yapılıyor:", values);
    setTimeout(() => {
      // Simülasyon amaçlı, 2 saniye sonra işlemi tamamlıyoruz
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form>
            <div className="form-field">
              <Field
                as={TextField}
                name="email"
                label="E-posta"
                fullWidth
                variant="outlined"
                error={!!values.email}
                helperText={<ErrorMessage name="email" />}
              />
            </div>

            <div className="form-field">
              <Field
                as={TextField}
                name="password"
                type="password"
                label="Şifre"
                fullWidth
                variant="outlined"
                error={!!values.password}
                helperText={<ErrorMessage name="password" />}
              />
            </div>

            <div className="form-field">
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="remember"
                    checked={values.remember}
                    onChange={handleChange}
                  />
                }
                label="Beni Hatırla"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
