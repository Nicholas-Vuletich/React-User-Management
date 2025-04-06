import { useState } from 'react'
import FormaZaDodavanje from './components/formaZaDodavanje';

export type KorisnikType = {
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

  const dodajKorisnika = (ime:string, email:string, admin:boolean) => {
    const noviKorisnik: KorisnikType = {
      id: Date.now(),
      ime,
      email,
      admin,
    };
    setKorisnici([...korisnici, noviKorisnik]);
  };
  
  return(
    <div>
      <h1>Lista korisnika</h1>
      <FormaZaDodavanje dodajKorisnika={dodajKorisnika} />
      {korisnici.map(korisnik =>
        korisnik.admin ? (
          <Admin key={korisnik.id} korisnik={korisnik} obrisiKorisnika={obrisiKorisnika} />
        ) : (
          <Korisnik key={korisnik.id} korisnik={korisnik} />
        )
      )}
    </div>
  )
}

export default App
