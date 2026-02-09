// components/CookieConsent.jsx
'use client'
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Ejemplo simple: solo mostrar si no se ha aceptado antes
    const accepted = window.localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__inner">
        <p className="cookie-consent__text">
          Usamos cookies para mejorar tu experiencia de navegación, analizar el
          tráfico del sitio y personalizar contenidos. Puedes aceptar el uso de
          cookies o configurar tus preferencias.
        </p>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--primary"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          {/* Si no quieres botón secundario, puedes quitarlo */}
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--secondary"
            onClick={() => setVisible(false)}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
