'use client'
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie-consent";

function readConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

// Guarda "accepted" o "rejected". Si se agrega analítica, cárgala solo cuando readConsent() === "accepted".
function saveConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Sin almacenamiento (modo privado): el banner volverá a mostrarse en la siguiente visita.
  }
}

export default function CookieConsent() {
  // En el servidor no hay localStorage: el banner solo aparece ya en el navegador.
  const consent = useSyncExternalStore(subscribe, readConsent, () => "server");
  const [dismissed, setDismissed] = useState(false);

  const choose = (value) => {
    saveConsent(value);
    setDismissed(true);
  };

  if (consent || dismissed) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-consent__inner">
        <p className="cookie-consent__text">
          Usamos cookies para mejorar tu experiencia de navegación, analizar el
          tráfico del sitio y personalizar contenidos. Consulta nuestro{" "}
          <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>.
        </p>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--primary"
            onClick={() => choose("accepted")}
          >
            Aceptar
          </button>
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--secondary"
            onClick={() => choose("rejected")}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
