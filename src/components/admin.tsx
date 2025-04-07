import React from "react";
import { KorisnikType } from "../App";
// import { KorisnikType } from "./types"; // ako koristiš types.ts za definiciju tipova

type Props = {
  korisnik: KorisnikType;
  obrisiKorisnika: (id: number) => void;
};

const Admin: React.FC<Props> = ({ korisnik, obrisiKorisnika }) => {
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px 0" }}>
      <p><strong>Ime (admin):</strong> {korisnik.ime}</p>
      <p><strong>Email:</strong> {korisnik.email}</p>
      <button onClick={() => obrisiKorisnika(korisnik.id)}>Obriši korisnika</button>
    </div>
  );
};

export default Admin;
