import { Component, OnInit } from '@angular/core';
import {DatosService} from './datos.service';
import {Datos2Service} from './datos2.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  metricsTableData:Array<any>;
  peopleTableData:Array<any>;
  smartTableData:Array<any>;
  constructor(private datos:DatosService,private datos2:Datos2Service) { 
    this.metricsTableData=datos.metricsTableData;
    this.peopleTableData=datos.peopleTableData;
    this.smartTableData=datos.smartTableData;

  }

  ngOnInit(): void {
  }

}
