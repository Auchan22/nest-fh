class NewCokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`EH`)
    }

    speak(){
        console.log(`HOLA, ${this.name}`)
    }
}

//Los decoradores son funciones que amplian a nuestras clases

//Retornan una funcion o modificacion
// Tiene acceso a la definicion de la clase, agregando más funcionalidad
// Modificar su comportamiento, expandir la funcionalidad
const MyDecorator = () => {
    //El target es una clase/Function
    return (target: Function) => {
        return NewCokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }
}

export const charmander = new Pokemon(4, "Charmander")

charmander.scream();
charmander.speak();