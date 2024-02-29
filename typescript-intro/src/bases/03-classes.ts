interface PokemonI {
    name: string;
    tipo: string;
    imageUrl: string;
    id: number;
    scream: () => string;
    speak: (t: string) => string;
}

export class Pokemon implements PokemonI {
    name: string;
    tipo: string;
    private id: number

    constructor(id: number,name: string, tipo: string) {
        this.id = id;
        this.name = name;
        this.tipo = tipo
    }

    get getTipo() {
        return this.tipo;
    }

    get getName(){
        return this.name;
    }

    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream(): string{
        return `${this.getName} screams: GRRRRR`
    }

    public speak(t: string): string {
        return `${this.getName} dice: ${t}`
    }
}

export const ricardo = new Pokemon(999, "Ricardo", "Fuego")

console.log(ricardo.scream())
console.log(ricardo.speak("gil"))