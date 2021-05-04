export class Owner{
    id: string;
    name:string;
    age: string;
    fone:string;
    cpf:string;
    address:string;
    email:string;
    pets: string;

    constructor(id?: string, name?: string, age?: string, fone?: string, cpf?: string, address?: string, email?: string, pets?: string) {
        this.id = id || '';
        this.name = name || '';
        this.age = age || '';
        this.fone = fone || '';
        this.cpf = cpf || '';
        this.address = address || '';
        this.email = email || '';
        this.pets = pets || '';
    }
}

export class OwnerList{
    owners: Owner[];

    constructor(owners:Owner[]){
        this.owners = owners;
    }

    getOwnerList(){
        return this.owners.slice();
    }
    
        filterOwner(owners: Owner): Owner[] | null{
        let new_owners: Owner[] = [];
        for(let aux of this.owners){
            if(owners.age !== aux.age && owners.id !== aux.id){
                new_owners.push(aux);
            }
        }
        if(new_owners.length === this.owners.length){
            return null;
        }
        return new_owners;
    }
}
