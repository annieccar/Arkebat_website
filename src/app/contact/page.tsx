"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../components/Button";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkoolov");

  console.log(state);

  return (
    <div className="mt-28 w-full flex flex-col items-center px-4">
      <h1 className="text-3xl mb-10">Contact</h1>
      <p className="text-center">
        Arkébat est à votre disposition pour discuter de votre projet et
        répondre à toutes vos questions. Contactez-nous aujourd'hui pour obtenir
        un devis <span className="font-bold text-icon">gratuit</span> et{" "}
        <span className="font-bold text-icon">sans engagement</span>
      </p>
      {state.succeeded ? (
        <p>Merci pour votre message, nous reviendrons rapidement vers vous</p>
      ) : (
        <form
          className="mt-10 w-5/6 flex flex-col items-center"
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
          />
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
            placeholder="Téléphone"
          ></input>
          <ValidationError
            prefix="Téléphone"
            field="phone"
            errors={state.errors}
          />
          <input
            type="text"
            name="email"
            id="email"
            className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none "
            placeholder="Email"
            required
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            id="message"
            className="w-full bg-input rounded-md text-md px-2 py-1 my-3 text-gray outline-none focus:outline-none min-h-[180px] "
            placeholder="Votre message"
            required
            minLength={20}
          ></textarea>
          <ValidationError
            prefix="Messagee"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            <Button title="Envoyer" />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
