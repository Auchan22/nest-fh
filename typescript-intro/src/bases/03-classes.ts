import { PokemonResponse } from "@/interfaces/PokemonResponse.interface";
import axios from "axios";

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

    async getMoves() {
        let {data} = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/4");

        return data.moves
    }
}

export const ricardo = new Pokemon(999, "Ricardo", "Fuego")

console.log(ricardo.scream())
console.log(ricardo.speak("gil"))
console.log(ricardo.getMoves())
