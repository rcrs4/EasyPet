export class Owner{
    name:string;
    age: string;
    fone:string;
    cpf:string;
    address:string;
    email:string;

    constructor(name?: string, age?: string, fone?: string, cpf?: string, address?: string, email?: string) {
        this.name = name || '';
        this.age = age || '';
        this.fone = fone || '';
        this.cpf = cpf || '';
        this.address = address || '';
        this.email = email || '';
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
}