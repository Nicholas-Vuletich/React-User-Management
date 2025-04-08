import React from "react";
import { KorisnikType } from "../App";

type Props = {
  korisnik: KorisnikType;
  obrisiKorisnika: (id: number) => void;
};

const Korisnik: React.FC<Props> = ({ korisnik, obrisiKorisnika }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <p><strong>Ime:</strong> {korisnik.ime}</p>
      <p><strong>Email:</strong> {korisnik.email}</p>
      {korisnik.admin && <p style={{ color: "blue" }}><strong>Admin korisnik</strong></p>}
      <button onClick={() => obrisiKorisnika(korisnik.id)}>Obriši korisnika</button>
    </div>
  );
};

export default Korisnik;
