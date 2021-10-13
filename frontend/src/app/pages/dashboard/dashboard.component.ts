import { Component, OnInit } from '@angular/core';

import {GlobalService} from '../../global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public global:GlobalService) { 
    //this.getData();
    this.global.getFacturas();
  }

  ngOnInit(): void {
    //this.getData();
  }

  verFactura(id:any){
    this.global.verFactura(id);
  }
  borrarFactura(id:any){
    this.global.eliminarrFactura(id);
  }

  

}
