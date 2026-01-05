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
    <main className="contact-main min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-6 text-center">
          Contactame
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Estoy disponible para consultas, proyectos o colaboraciones.
          Completa el formulario y te responderé lo antes posible.
        </p>

        <ul className="space-y-2 text-gray-500 mb-8 text-center">
          <li>📧 Respuesta rápida vía email</li>
          <li>💡 Ideas y proyectos de desarrollo</li>
          <li>🤝 Colaboraciones académicas y profesionales</li>
        </ul>

        {status === "success" && (
          <p className="mb-4 flex items-center gap-2 bg-green-100 text-green-700 p-3 rounded-lg shadow-sm">
            ✅ <span>Tu mensaje fue enviado con éxito.</span>
          </p>
        )}
        {status === "error" && (
          <p className="mb-4 flex items-center gap-2 bg-red-100 text-red-700 p-3 rounded-lg shadow-sm">
            ❌ <span>Hubo un error al enviar. Intenta nuevamente.</span>
          </p>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">👤</span>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">✉️</span>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📝</span>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                rows="5"
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-semibold py-3 rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-600 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
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