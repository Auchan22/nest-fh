import { Move, PokemonResponse } from '@/interfaces/PokemonResponse.interface';
import { Adapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly adpaterHttp: Adapter<PokemonResponse>
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.adpaterHttp.get('https://pokeapi.co/api/v2/pokemon/'+this.id);
        console.log( data.moves );
        
        return data.moves;
    }

}

export const charmander = new Pokemon( 4, 'Charmander', new PokeApiFetchAdapter());
export const bulbasaur = new Pokemon( 5, 'Bulbasaur', new PokeApiAdapter());

charmander.getMoves();
bulbasaur.getMoves();