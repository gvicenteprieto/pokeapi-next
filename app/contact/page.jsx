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
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Contactame
      </h1>

      <p className="text-gray-700 leading-relaxed mb-8 text-center">
        Estoy disponible para consultas, proyectos o colaboraciones.
        Completa el formulario y te responderé lo antes posible.
      </p>

      <ul className="space-y-2 text-gray-600 mb-10 text-center text-sm">
        <li>📧 Respuesta rápida vía email</li>
        <li>💡 Ideas y proyectos de desarrollo</li>
        <li>🤝 Colaboraciones académicas y profesionales</li>
      </ul>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-10">
        {/* Nombre */}
        <div className="bg-blue-100 p-6 rounded-lg border border-blue-300 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            className="w-full rounded-md border border-gray-300 px-4 py-3 
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                       placeholder-gray-400"
            placeholder="Tu nombre"
            required
          />
        </div>

        {/* Email */}
        <div className="bg-indigo-100 p-6 rounded-lg border border-indigo-300 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-4 py-3 
                       focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
                       placeholder-gray-400"
            placeholder="tu@email.com"
            required
          />
        </div>

        {/* Mensaje */}
        <div className="bg-purple-100 p-6 rounded-lg border border-purple-300 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Mensaje
          </label>
          <textarea
            name="message"
            rows="6"
            className="w-full rounded-md border border-gray-300 px-4 py-3 
                       focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                       placeholder-gray-400"
            placeholder="Escribe tu mensaje..."
            required
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-600 text-white font-semibold py-4 rounded-md 
                     hover:bg-blue-700 transition-colors 
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  );
}