import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        "service_qpckw7m",
        "template_l2cskae",
        form.current,
        "DIQZ5ce73oM6IPQS-"
      );
      toast.success("Email sent successfully");

      if (Object.keys(errors).length > 0) {
        throw new Error("Form validation error");
      }
      // Do something after the email is sent, e.g., show a success message or redirect to another page
    } catch (error) {
      toast.error("Failed to send email");
      console.error("Failed to send email:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const form = useRef();

  const handleButtonClick = () => {
    setIsSubmitClicked(true);
  };

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center">
      <div className="w-1/3 h-3/4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white h-full shadow-md rounded px-8 pt-6 pb-8 mb-4"
          ref={form}
        >
          <div className="mb-4">
            <div className="py-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name", { required: "This is a required field" })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  isSubmitClicked && errors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Please enter your name"
              />
              {errors.name && isSubmitClicked && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="py-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "This is a required field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  isSubmitClicked && errors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="text"
                placeholder="Please enter your email"
              />
              {errors.email && isSubmitClicked && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-6 h-1/3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              {...register("message", {
                required: "This is a required field",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters long",
                },
              })}
              className={`shadow appearance-none rounded w-full h-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border ${
                isSubmitClicked && errors.message ? "border-red-500" : ""
              }`}
              placeholder="Your message here"
            />
            {errors.message?.message && isSubmitClicked && (
              <p className="text-red-500 text-xs italic">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center py-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
