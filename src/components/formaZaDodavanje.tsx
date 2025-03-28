

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