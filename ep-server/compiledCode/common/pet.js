"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(id, nome, especie, raca, idade, peso, dono) {
        this.id = id || '';
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.idade = idade || '';
        this.peso = peso || 0;
        this.dono = dono || '';
    }
}
exports.Pet = Pet;
class PetList {
    constructor(pets) {
        this.pets = pets;
    }
    filterPets(pet) {
        let new_pets = [];
        for (let p of this.pets) {
            if (pet.nome !== p.nome && pet.id !== p.id) {
                new_pets.push(p);
            }
        }
        if (new_pets.length === this.pets.length) {
            return null;
        }
        return new_pets;
    }
    getPets() {
        return this.pets.slice();
    }
}
exports.PetList = PetList;
//# sourceMappingURL=pet.js.map