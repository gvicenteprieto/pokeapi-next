export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Contacto</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea
            className="w-full border rounded p-2"
            rows="4"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}