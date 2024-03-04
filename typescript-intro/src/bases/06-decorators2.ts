
// Su objetivo es marcar que un metodo es deprecado por una razon, recibida por parametro
const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    //   console.log(target, memberName, propertyDescriptor)
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            // console.log(args)
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}`)
    }

    @Deprecated('Most use speak2 method instead')
    speak(s: string){
        console.log(`${this.name}, ${this.name} | ${s}`)
    }

    speak2(){
        console.log(`${this.name}, ${this.name} !!!!°°°`)
    }
}

export const charmander = new Pokemon(4, "Charmander")

charmander.scream();
charmander.speak("Pepe");