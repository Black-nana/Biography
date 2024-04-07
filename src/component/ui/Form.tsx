import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface FormValues {
  email: string;
}

const Form: React.FC = () => {
  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={{ email: '' }}
        validate={(values: FormValues) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          setTimeout(() => {
            toast.success('Subscription successful!');
            toast.success('Thank you for subscribing');
            setSubmitting(false);
          }, 400);
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm className='flex-col  lg:flex'>
            <div>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full border-2 p-2 text-blue-950 hover:border-purple-900 focus:border-purple-900 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 font-light"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white bg-purple-900 py-2 px-4 font-medium rounded-md hover:bg-purple-700 transition-all duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
