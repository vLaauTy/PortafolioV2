import { useState } from "react";

const regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_MENSAJE = 1000;

// msj: textos de error del idioma actual (t.form.errores)
export const validar = (form, msj) => {
  const errores = {};
  const nombre = form.nombre.trim();
  const email = form.email.trim();
  const mensaje = form.mensaje.trim();

  if (!nombre) errores.nombre = msj.nombreVacio;
  else if (!regexNombre.test(nombre)) errores.nombre = msj.nombreInvalido;

  if (!email) errores.email = msj.emailVacio;
  else if (!regexEmail.test(email)) errores.email = msj.emailInvalido;

  if (!mensaje) errores.mensaje = msj.mensajeVacio;
  else if (mensaje.length > MAX_MENSAJE) errores.mensaje = msj.mensajeLargo(MAX_MENSAJE);

  return errores;
};

const inicial = { nombre: "", email: "", mensaje: "" };

// estado: "idle" | "enviando" | "ok" | "error"
export const useContactForm = (destino, textosForm) => {
  const [form, setForm] = useState(inicial);
  const [tocados, setTocados] = useState({});
  const [estado, setEstado] = useState("idle");

  const errores = validar(form, textosForm.errores);
  const erroresVisibles = Object.fromEntries(
    Object.entries(errores).filter(([campo]) => tocados[campo])
  );

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (estado === "ok" || estado === "error") setEstado("idle");
  };

  const handleBlur = (e) => setTocados((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTocados({ nombre: true, email: true, mensaje: true });

    const campoConError = Object.keys(errores)[0];
    if (campoConError) {
      e.target.elements[campoConError]?.focus();
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${destino}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.nombre.trim(),
          email: form.email.trim(),
          message: form.mensaje.trim(),
          _subject: textosForm.asunto,
        }),
      });
      if (!res.ok) throw new Error(res.statusText);
      setForm(inicial);
      setTocados({});
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  };

  return { form, errores: erroresVisibles, estado, handleChange, handleBlur, handleSubmit };
};
