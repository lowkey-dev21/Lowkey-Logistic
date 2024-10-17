import React, { useState } from "react";
import axios from "axios";

const Message = () => {
  // Form state and validation
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    sbj: "",
    msg: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    sbj: false,
    msg: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWaitMessage, setShowWaitMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: value.length === 0,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setError((prev) => ({
      ...prev,
      [name]: value.length === 0,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: formInputs.name.length === 0,
      email: formInputs.email.length === 0,
      sbj: formInputs.sbj.length === 0,
      msg: formInputs.msg.length === 0,
    };

    setError(newErrors);

    const isValid = !Object.values(newErrors).some((err) => err);

    if (isValid) {
      setShowWaitMessage(true);

      // EmailJS service details
      const serviceId = "service_wz7luve";
      const templateId = "template_0ttaebi";
      const publicKey = "xM5wlAsigROh8UjWY";

      // Template parameters
      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formInputs.name, // Ensure this matches your template variable
          from_email: formInputs.email, // Ensure this matches your template variable
          subject: formInputs.sbj, // Ensure this matches your template variable
          message: formInputs.msg, // Ensure this matches your template variable
        },
      };

      try {
        const res = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        console.log(res.data);
        setIsSubmitted(true);

        
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setShowWaitMessage(false);
        setFormInputs({
          name: "",
          email: "",
          sbj: "",
          msg: "",
        });
        setIsSubmitted(false);
      }, 6000);
    } else {
      setIsSubmitted(false);
    }
  };

  const isFormValid = !Object.values(error).some((err) => err);

  return (
    <>
      <section className="w-full flex justify-center flex-col">
        <p className="mb-2 font-thin text-slate-500">
          Fields marked with an{" "}
          <span className="text-red-500 font-bold">*</span> are required
        </p>

        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <label className="font-bold- mt-0  " htmlFor="name">
            Name <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
            placeholder="e.g: Lowkey Dev"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formInputs.name}
          />
          {error.name && (
            <p className="flex text-xs text-red-500">
              This is a required field
            </p>
          )}
          <label className="font-bold" htmlFor="email">
            Email <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
            placeholder="e.g: example@example.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formInputs.email}
          />
          {error.email && (
            <p className="flex text-xs text-red-500">
              This is a required field
            </p>
          )}
          <label className="font-bold" htmlFor="sbj">
            Subject <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            id="sbj"
            name="sbj"
            className="w-full rounded-2xl focus:border-[lime] outline-none border-[1px] p-2 border-slate-500 mt-1"
            placeholder="e.g: Subject"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formInputs.sbj}
          />
          {error.sbj && (
            <p className="flex text-xs text-red-500">
              This is a required field
            </p>
          )}
          <label className="font-bold" htmlFor="msg">
            Message <span className="text-red-500 font-bold">*</span>
          </label>
          <textarea
            id="msg"
            name="msg"
            className="w-full rounded-2xl focus:border-[lime] h-[140px] outline-none border-[1px] p-2 border-slate-500 mt-1"
            placeholder="e.g: Your message here"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formInputs.msg}
          />
          {error.msg && (
            <p className="  flex text-xs text-red-500">
              This is a required field
            </p>
          )}
          {showWaitMessage && (
            <p className="text-[12px] font-thin">Please wait...</p>
            
          )}{" "}
          <button
            type="submit"
            className={`mt-4 p-2 w-[100px] sm:h-[60px] text-white rounded-2xl ${
              isFormValid ? "bg-[lime]" : "bg-slate-300 "
            }   `}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Message;
