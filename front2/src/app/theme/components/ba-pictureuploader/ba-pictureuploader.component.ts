import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-ba-pictureuploader',
  templateUrl: './ba-pictureuploader.component.html',
  styleUrls: ['./ba-pictureuploader.component.scss']
})
export class BaPictureuploaderComponent implements OnInit {

  @Input() defaultPicture:string = '';
  @Input() picture:string = '';
  @Output() pictureChange = new EventEmitter<any>();
  //@Input() uploaderOptions:NgUploaderOptions = { url: '' };
  @Input() canDelete:boolean = true;
  
  @Output() onUploadCompleted = new EventEmitter<any>();

  //@ViewChild('fileUpload') public _fileUpload:ElementRef;
  //public uploadInProgress:boolean;
  @ViewChild('fileUpload') public _fileUpload:any;
  public uploadInProgress:any;  
  constructor(private renderer: Renderer2) {
  }
  

  ngOnInit(): void {
  }

  beforeUpload(uploadingFile:any): void {
    alert('subiendo');
    let files = this._fileUpload.nativeElement.files;

    if (files.length) {
      const file = files[0];
      this._changePicture(file);

      if (!this._canUploadOnServer()) {
        uploadingFile.setAbort();
      } else {
        this.uploadInProgress = true;
      }
    }
  }

  bringFileSelector():boolean {
    //this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  removePicture():boolean {
    this.picture = '';
    return false;
  }

  _changePicture(file:File):void {
    const reader = new FileReader();
    reader.addEventListener('load', (event:Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  _onUpload(event:any):void {
    //alert('subiendo');
    //if (data['done'] || data['abort'] || data['error']) {
    //  this._onUploadCompleted(data);
    //} else {
    //  this.onUpload.emit(data);
    //}
    console.log(this._fileUpload.nativeElement.files);
    const reader = new FileReader();
    reader.addEventListener('load', (event:Event) => {
      this.picture = (<any> event.target).result;
    }, false);
    reader.readAsDataURL(this._fileUpload.nativeElement.files[0]);    
    //this.pictureChange.emit(data[0]);
  }

  _onUploadCompleted(data:any):void {
    alert('subiendo');
    this.uploadInProgress = false;
    this.onUploadCompleted.emit(data);
  }

  _canUploadOnServer():boolean {
    //return !!this.uploaderOptions['url'];
    return true;
  }  
}
