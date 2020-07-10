import { Component, OnInit } from '@angular/core';
import { HouseingService } from '../../services/houseing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  propeties: IProperty[];
  constructor(private route: ActivatedRoute , private houseingServices: HouseingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2 ;
    }
    this.houseingServices.getAllProperties(this.SellRent).subscribe(
      data => {
        this.propeties = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
      );
  }

}
