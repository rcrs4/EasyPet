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

    filterPets(pet: Pet): Pet[] | null{
        let new_pets: Pet[] = [];
        for(let p of this.pets){
            if(pet.nome !== p.nome && pet.id !== p.id){
                new_pets.push(p);
            }
        }
        if(new_pets.length === this.pets.length){
            return null;
        }
        return new_pets;
    }

    getPets(){
        return this.pets.slice();
    }
}