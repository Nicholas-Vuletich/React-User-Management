import React, { useState } from "react";

type Props = {
  dodajKorisnika: (ime: string, email: string, admin: boolean) => void;
};

const FormaZaDodavanje: React.FC<Props> = ({ dodajKorisnika }) => {
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false); // Ispravljen `useState`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ime || !email) {
      alert("Molimo unesite ime i email.");
      return;
    }
    dodajKorisnika(ime, email, admin);
    setIme("");
    setEmail("");
    setAdmin(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
        placeholder="Ime"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <label>
        Admin:
        <input
          type="checkbox"
          checked={admin}
          onChange={(e) => setAdmin(e.target.checked)}
        />
      </label>
      <button type="submit">Dodaj korisnika</button>
    </form>
  );
};

export default FormaZaDodavanje;
