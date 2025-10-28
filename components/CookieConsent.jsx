"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("cookie_consent", value);
    setVisible(false);

    // Si aceptó, aquí puedes inicializar scripts opcionales (ej. Google Analytics)
    if (value === "accepted") {
      console.log("Cookies aceptadas");
      // initAnalytics();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white text-sm px-5 py-4 flex flex-col sm:flex-row justify-between items-center z-50 shadow-lg"
    >
      <p className="mb-3 sm:mb-0 max-w-[600px]">
        Usamos cookies para mejorar tu experiencia en nuestro sitio web y analizar el tráfico.
        Al continuar, aceptas nuestro uso de cookies.{" "}
        <a href="/aviso-privacidad" className="underline text-blue-400">
          Aviso de Privacidad
        </a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-gray-600 hover:bg-gray-700 px-3 py-1.5 rounded-md"
        >
          Rechazar
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-md"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
