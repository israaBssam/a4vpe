import { Component, OnInit} from '@angular/core';
import { DynamicDialogRef,DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-home_video',
  templateUrl: './home_video.component.html',
})
export class HomeVideoComponent  implements OnInit {
  public src = '';

    constructor(
      public ref :DynamicDialogRef,
      public config: DynamicDialogConfig
    ) {}

    ngOnInit(): void {
          this.src = this.config.data.src; 

     }

}
