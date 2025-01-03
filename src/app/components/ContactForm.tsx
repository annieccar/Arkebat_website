"use client";

import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mbljeebg");

  if (state.succeeded) {
    return (
      <p className="text-lg font-bold text-icon w-4/5 text-center mt-20">
        Merci pour votre message, nous reviendrons vers vous très rapidement!
      </p>
    );
  }

  return (
    <form
      className="mt-10 w-5/6 lg:w-full xl:w-2/3 lg:ml-10 lg:mt-0 md:w-2/3 flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <input
        id="last-name"
        type="text"
        name="last-name"
        className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
        placeholder="Nom"
        required
        minLength={2}
      ></input>
      <ValidationError
        prefix="Last name"
        field="last-name"
        errors={state.errors}
        className="text-icon"
      />
      <input
        type="text"
        id="first-name"
        name="first-name"
        className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
        placeholder="Prénom"
        required
        minLength={2}
      ></input>
      <ValidationError
        prefix="First name"
        field="first-name"
        errors={state.errors}
        className="text-icon"
      />
      <input
        type="text"
        id="phone"
        name="phone"
        className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
        placeholder="Téléphone"
        minLength={8}
        maxLength={9}
      ></input>
      <ValidationError
        prefix="Téléphone"
        field="phone"
        errors={state.errors}
        className="text-icon"
      />
      <input
        type="text"
        name="email"
        id="email"
        className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
        placeholder="Email"
        required
      ></input>
      <ValidationError
        className="text-icon"
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        name="message"
        id="message"
        className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none min-h-[180px] "
        placeholder="Votre message"
        required
        minLength={20}
      ></textarea>
      <ValidationError
        className="text-icon"
        prefix="Messagee"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting} className="md:mt-10">
        <Button title="Envoyer" isLink={false} />
      </button>
    </form>
  );
}

// "use client";

// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import Button from "../components/Button";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("xdkoolov");

//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }

//   return (
//     <form
//       className="mt-10 w-5/6 lg:w-full xl:w-2/3 lg:ml-10 lg:mt-0 md:w-2/3 flex flex-col items-center"
//       onSubmit={handleSubmit}
//     >
//       <input
//         id="last-name"
//         type="text"
//         name="last-name"
//         className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
//         placeholder="Nom"
//         required
//         minLength={2}
//       ></input>
//       <ValidationError
//         prefix="Last name"
//         field="last-name"
//         errors={state.errors}
//       />
//       <input
//         type="text"
//         id="first-name"
//         name="first-name"
//         className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
//         placeholder="Prénom"
//         required
//         minLength={2}
//       ></input>
//       <ValidationError
//         prefix="First name"
//         field="first-name"
//         errors={state.errors}
//       />
//       <input
//         type="text"
//         id="phone"
//         name="phone"
//         className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
//         placeholder="Téléphone"
//       ></input>
//       <ValidationError prefix="Téléphone" field="phone" errors={state.errors} />
//       <input
//         type="text"
//         name="email"
//         id="email"
//         className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
//         placeholder="Email"
//         required
//       ></input>
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <textarea
//         name="message"
//         id="message"
//         className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none min-h-[180px] "
//         placeholder="Votre message"
//         required
//         minLength={20}
//       ></textarea>
//       <ValidationError
//         prefix="Messagee"
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting} className="md:mt-10">
//         <Button title="Envoyer" />
//       </button>
//     </form>
//   );
// }

// export default ContactForm;
