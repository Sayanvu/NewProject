import { Component } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  property:any = {
    "Id":1,
    "Name":"3BHK",
    "Type":"House",
    "price":1000
  };

}
