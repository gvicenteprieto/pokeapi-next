"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Contáctame
        </h1>

        {status === "success" && (
          <p className="mb-4 bg-green-100 text-green-700 p-3 rounded">
            ✅ Tu mensaje fue enviado con éxito.
          </p>
        )}
        {status === "error" && (
          <p className="mb-4 bg-red-100 text-red-700 p-3 rounded">
            ❌ Hubo un error al enviar. Intenta nuevamente.
          </p>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="tu@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              name="message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="5"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>

          {/* Botón con spinner */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}