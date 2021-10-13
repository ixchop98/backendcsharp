import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-contenttop',
  templateUrl: './ba-contenttop.component.html',
  styleUrls: ['./ba-contenttop.component.scss']
})
export class BaContenttopComponent implements OnInit {
  public activePageTitle:string = 'Titulo (GLobalServ.))';
  constructor() { }

  ngOnInit(): void {
  }

}
