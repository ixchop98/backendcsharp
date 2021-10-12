import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-ba-backtop',
  templateUrl: './ba-backtop.component.html',
  styleUrls: ['./ba-backtop.component.scss']
})
export class BaBacktopComponent implements AfterViewInit{
  @Input() position:number = 400;
  @Input() showSpeed:number = 300;
  @Input() moveSpeed:number = 200;  

  @ViewChild('baBackTop') _selector:any;


  ngAfterViewInit () {
    //this._onWindowScroll();
  }
  constructor() { }

  //ngOnInit(): void {
  //}

  @HostListener('click')
  _onClick():boolean {
    $('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }
  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? $(el).fadeIn(this.showSpeed) : $(el).fadeOut(this.showSpeed);
  }

}
