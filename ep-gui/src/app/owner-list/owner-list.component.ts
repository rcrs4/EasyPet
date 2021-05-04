import { Component, OnInit } from '@angular/core';
import {Owner} from '../../../../common/ownerList'
import {OwnerListService} from './owner-list.service'

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Owner[] = [];

  constructor(private ownerList_service: OwnerListService) { }

  ngOnInit() {
    this.get_ownerList();
  }

  get_ownerList(){
    this.ownerList_service.getOwnerList().subscribe(
      x => this.owners = x,
      err => console.error('Error getting Owners List')
    )
  }

  filterOwner(owner: Owner): Owner[] | null{
    let new_owners: Owner[] = [];
    for(let aux of this.owners){
        if(owner.age !== aux.age && owner.id !== aux.id){
            new_owners.push(aux);
        }
    }
    if(new_owners.length === this.owners.length){
        return null;
    }
    return new_owners;
  }
}
