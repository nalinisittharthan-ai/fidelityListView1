import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';


    @Component({
      selector: 'app-new-component',
       templateUrl: './new-component.component.html',  
})
    export class NewComponentComponent  {

  //start
  data = [];
      ev: any;

  constructor(private fileUploadService: FileUploadService) {
  }

  onClick() {
    alert('sssss');
    this.fileUploadService.getServerSentEvent('http://localhost:8081/stream-events')
      .subscribe(ev => {
       alert(ev.data);
        //this.data.push('xxxxx');
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('==> complete');
      });
  }

  //end
    }