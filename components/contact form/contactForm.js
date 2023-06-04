import { Button } from "@mui/material";
import React, { useState } from "react";
import validator from "validator";
// import Select from "react-select";
import { useForm } from "react-hook-form";

// const validateData = (data) => {
//   const errors = {};

//   // Perform your validation logic here using the 'validator' library or custom validation rules
//   if (!validator.isEmail(data.email)) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// };

const ContactForm = ({ onSave, user = {} }) => {
  const [userData, setUserData] = useState(user);
  const [errors, setErrors] = useState({});

  const { register, handleSubmit, control } = useForm();

  // const handleSave = (data) => {
  //   const errors = validateData(data);
  //   if (Object.keys(errors).length > 0) {
  //     setErrors(errors);
  //     return;
  //   }
  //   onSave(data);
  // };

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center">
      <div class="w-1/3 h-3/4">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="bg-white h-full shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <div className="py-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Please enter your name"
              />
            </div>
            <div className="py-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Please enter your email"
              />
            </div>
          </div>
          <div class="mb-6 h-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: true, minLength: 10 })}
              class="shadow appearance-none rounded w-full h-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message here"
            />
          </div>
          <div class="flex items-center justify-center py-10">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
