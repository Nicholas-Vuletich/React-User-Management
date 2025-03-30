import React from "react";
import { useState } from 'react'

type KorisnikType = {
    id: number;
    ime: string;
    email: string;
    admin?: boolean;
};

const pocetniKorisnici: KorisnikType[] = [
    {id: 1, ime: "Marko", email: "marko@email.com"},
    {id: 2, ime: "Ana", email: "ana@gmail.com", admin: true},
];


function App() {
  const [korisnici, setKorisnici] = useState<KorisnikType[]>(pocetniKorisnici);
  console.log(korisnici)

  const obrisiKorisnika = (id: number) => {
    setKorisnici(korisnici.filter(korisnik =>korisnik.id !== id));
  }
}



export default App
