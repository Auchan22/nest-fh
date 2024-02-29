interface PokemonI {
    name: string;
    tipo: string;
}

export class Pokemon implements PokemonI {
    name: string;
    tipo: string;

    constructor(name: string, tipo: string) {
        this.name = name;
        this.tipo = tipo
    }

    public get getTipo() {
        return this.tipo;
    }

    public get getName(){
        return this.name;
    }
}

export const ricardo = new Pokemon("Ricardo", "Fuego")