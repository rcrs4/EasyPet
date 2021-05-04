export class Pet{
    id:string;
    nome:string;
    especie:string;
    raca:string;
    idade:string;
    peso:number;
    dono:string;

    constructor(id?: string, nome?: string, especie?: string, raca?: string, idade?: string, peso?: number, dono?: string) {
        this.id = id || '';
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.idade = idade || '';
        this.peso = peso || 0;
        this.dono = dono || '';
    }
}

export class PetList{
    pets: Pet[];

    constructor(pets:Pet[]){
        this.pets = pets
    }

    getPets(){
        return this.pets.slice();
    }
}