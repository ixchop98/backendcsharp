import { Component, OnInit } from '@angular/core';
import { GlobalService} from '../../global.service'
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor(public _state:GlobalService) { this._state.getSaldoCurrentUser();}

  ngOnInit(): void {
    
  }

  getSaldo(){
    
    return 1234;
  }
}
