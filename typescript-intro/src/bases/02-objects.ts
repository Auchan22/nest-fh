export const pokemonIds: number[] =[1,2,30, 34, 55, 66];

interface Pokemon {
    id: number;
    name: string;
    health: number;
    age?: number;
}

interface PokemonDTO extends Omit<Pokemon, "id"> {}

export const pokemon: PokemonDTO = {
    health: 20,
    name: "Ricardito"
}

let poke2: PokemonDTO = {
    health: 99,
    name: "Pepe",
    age: 18
}

export const cokemones: PokemonDTO[] = [];
cokemones.push(pokemon, poke2);

console.log(cokemones)