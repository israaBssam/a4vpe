import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { DialogService } from 'primeng/dynamicdialog';
import { HomeVideoComponent } from './video/home_video.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public details:any={slider_home:''};


  constructor(private home: HomeService,public dialogService: DialogService) {}
  ngOnInit() {
      this.home.getAll().subscribe({next: (data) => {
          this.details = data;
      }
    });
  }


  openVideo() {
    const ref = this.dialogService.open(HomeVideoComponent, {
        data:{src:this.details.what_we_do.video_src},
        header: 'What We Do',
        width: '70%'
    }); 
  }
}
