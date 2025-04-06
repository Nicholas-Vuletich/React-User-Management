import React from "react"
import { KorisnikType } from '../App';


type Props = {
    korisnik: KorisnikType;
};

const Korisnik: React.FC<Props> = ({korisnik}) => {
    return (
        <div style={{border: "1px solid gray", padding: "10px", margin: "10px 0"}}>
        <p><strong>Ime:</strong> {korisnik.ime}</p>
        <p><strong>Email:</strong> {korisnik.email}</p>
        </div>
    );
};

export default Korisnik;