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
      className="w-full flex flex-col items-center p-6 sm:p-10 mt-10 lg:mt-0 border-light_green border bg-green/20 rounded-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-light_green w-full text-start mb-4 font-semibold text-lg">
        Envoyez-nous un message
      </h2>
      <div className="w-full flex flex-col sm:flex-row sm:gap-6">
        <div className="w-full sm:w-1/2">
          <label className="w-full">Nom</label>
          <input
            id="last-name"
            type="text"
            name="last-name"
            className="w-full bg-green/30 border border-green rounded-md px-2 py-2 mb-3 mt-2 text-white text-sm outline-none focus:outline-none "
            placeholder="Votre nom"
            required
            minLength={2}
          ></input>
          <ValidationError
            prefix="Last name"
            field="last-name"
            errors={state.errors}
            className="text-icon"
          />
        </div>
        <div className=" w-full sm:w-1/2">
          <label className="w-full">Prénom</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="w-full bg-green/30 border border-green rounded-md px-2 py-2 mb-3 mt-2 text-white text-sm outline-none focus:outline-none "
            placeholder="Votre prénom"
            required
            minLength={2}
          ></input>
          <ValidationError
            prefix="First name"
            field="first-name"
            errors={state.errors}
            className="text-icon"
          />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row sm:gap-6">
        <div className="w-full sm:w-1/2">
          <label className="w-full">Téléphone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full bg-green/30 border border-green rounded-md px-2 py-2 mb-3 mt-2 text-white text-sm outline-none focus:outline-none "
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
        </div>
        <div className="w-full sm:w-1/2">
          <label className="w-full">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full bg-green/30 border border-green rounded-md px-2 py-2 mb-3 mt-2 text-white text-sm outline-none focus:outline-none "
            placeholder="Votre email"
            required
          ></input>
          <ValidationError
            className="text-icon"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>
      <label className="w-full">Message</label>
      <textarea
        name="message"
        id="message"
        className="w-full bg-green/30 border border-green rounded-md px-2 py-2 mb-3 mt-2 text-white text-sm outline-none focus:outline-none min-h-[180px] "
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

      <button type="submit" disabled={state.submitting} className="mt-10">
        <Button title="Envoyer" isLink={false} />
      </button>
    </form>
  );
}
