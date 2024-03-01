import { Move, PokemonResponse } from '@/interfaces/PokemonResponse.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly adpaterHttp: PokeApiAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.adpaterHttp.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }

}

export const charmander = new Pokemon( 4, 'Charmander', new PokeApiAdapter());

charmander.getMoves();