import { Component } from '@angular/core';
import { GlobalService} from './global.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front2';
  isMenuCollapsed: boolean = true;

  constructor(public global:GlobalService){
    this.global.generarProductos();
  }
}
