import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      setError("Email inválido.");
      return;
    }

    setError("");
    console.log("Enviar:", form);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
    {error && <span role="alert">{error}</span>}
    </main>
  );
}
